import dateTimes from './dateTime';

// チケットの作成・更新を表示するPタグ
const authorsPTag = document.querySelector('p.author');
if (!(authorsPTag instanceof HTMLParagraphElement)) throw new Error();

// 作成者のテキストとリンクを生成
const author = authorsPTag.children[0];
if (!(author instanceof HTMLAnchorElement)) throw new Error();
const authorInfo = [author, ' さんが'];

// 作成・更新日時をテキスト化
// 更新日時はnullable
const dateTimeSentences = dateTimes.map((dt) => {
  const dateTimeTag = authorsPTag.children[dt.position];
  if (!(dateTimeTag instanceof HTMLAnchorElement)) return '';

  const dateTime = dateTimeTag.title;
  const readableDateTime = dateTimeTag.textContent ?? '';

  return ` [${dateTime}] ${readableDateTime}前に${dt.ja}`;
});

authorsPTag.replaceChildren(...authorInfo, ...dateTimeSentences);
