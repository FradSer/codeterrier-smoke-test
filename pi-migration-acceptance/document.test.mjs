import test from "node:test";
import assert from "node:assert/strict";
import { updateDocument } from "./document.mjs";
const document = { ownerId: "owner", text: "before" };
test("owner may edit", () => assert.equal(updateDocument(document, { id: "owner" }, "after").text, "after"));
test("another user cannot edit", () => assert.throws(() => updateDocument(document, { id: "other" }, "after"), /Forbidden/));
