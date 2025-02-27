import BLOG from "../../blog.config";
import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";
import getAllPageIds from "./getAllPageIds";
import getPageProperties from "./getPageProperties";

export async function getAllData(id) {
  const authToken = BLOG.notionAccessToken || null;
  const api = new NotionAPI({ authToken });
  const response = await api.getPage(id);
  id = idToUuid(id);
  const collection = Object.values(response.collection)[0]?.value;
  const collectionQuery = response.collection_query;
  const block = response.block;
  const schema = collection?.schema;

  const rawMetadata = block[id].value;

  // Check Type
  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    console.log(`pageId "${id}" is not a database`);
    return null;
  } else {
    // Construct Data
    const pageIds = getAllPageIds(collectionQuery);
    const data = [];
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i];
      const properties = (await getPageProperties(id, block, schema)) || null;

      // Add fullwidth, createdtime to properties
      properties.createdTime = new Date(
        block[id].value?.created_time
      ).toString();
      data.push(properties);
    }

    // Sort by date
    if (BLOG.sortByDate) {
      data.sort((a, b) => {
        const dateA = new Date(a?.date?.start_date || a.createdTime);
        const dateB = new Date(b?.date?.start_date || b.createdTime);
        return dateB - dateA;
      });
    }
    return data;
  }
}
