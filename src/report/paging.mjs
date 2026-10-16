// Report fixture: pagination for long result sets.

/** Number of pages for a record count at a fixed page size. */
export function pageCount(recordCount, pageSize) {
  return Math.ceil(recordCount / pageSize);
}

/** Zero-based offset of a page, rejecting a page below one. */
export function pageOffset(page, pageSize) {
  if (page < 1) throw new Error("page must be at least 1");
  return (page - 1) * pageSize;
}
