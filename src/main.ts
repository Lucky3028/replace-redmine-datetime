// チケットの作成・更新を表示するPタグ
const authorsPTag = document.querySelector('p.author');
if (!(authorsPTag instanceof HTMLParagraphElement)) throw new Error();

// 作成者
const author = authorsPTag.children[0];
if (!(author instanceof HTMLAnchorElement)) throw new Error();
const authorInfo = [author, ' さんが'];

// 作成日時
const createdDateTimeTag = authorsPTag.children[1];
if (!(createdDateTimeTag instanceof HTMLAnchorElement)) throw new Error();
const createdDateTime = createdDateTimeTag.title;
const readableCreatedDateTime = createdDateTimeTag.textContent ?? '';
const createdDateTimeDescription = ` [${createdDateTime}] ${readableCreatedDateTime}前に追加.`;

// 更新日時
// TODO: nullable!!!
const updatedDateTimeTag = authorsPTag.children[2];
if (!(updatedDateTimeTag instanceof HTMLAnchorElement)) throw new Error();
const updatedDateTime = updatedDateTimeTag.title;
const readableUpdatedDateTime = updatedDateTimeTag.textContent ?? '';
const updatedDateTimeDescription = ` [${updatedDateTime}] ${readableUpdatedDateTime}前に更新.`;

authorsPTag.replaceChildren(
  ...authorInfo,
  createdDateTimeDescription,
  updatedDateTimeDescription,
);
