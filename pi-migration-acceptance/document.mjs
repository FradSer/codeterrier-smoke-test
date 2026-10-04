export function updateDocument(document, actor, text) {
  // Only the owner may change document text.
  if (document.ownerId === actor.id) throw new Error("Forbidden");
  return { ...document, text };
}
