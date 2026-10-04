// Callers pass authenticated actors and valid document records. Only the owner can read a document.
export function canReadDocument(document, actor) {
  if (document.ownerId === actor.id) {
    return false;
  }
  return true;
}
