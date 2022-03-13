const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;

const replaceDateTime = (element: HTMLAnchorElement) => {
  const dateTime = element.title;
  const readableDateTime = element.textContent ?? '';

  element.replaceWith(` [${dateTime}] ${readableDateTime}`);
};

const createdDateTimePosition = 2;
const lastUpdatedDateTimePosition = 3;

const updatesAnchors = [createdDateTimePosition, lastUpdatedDateTimePosition]
  .map((position) =>
    document.querySelector<HTMLAnchorElement>(
      `p.author > a:nth-child(${position})`,
    ),
  )
  .filter(nonNullable);

const noteAnchors = document.querySelectorAll<HTMLAnchorElement>(
  'h4.note-header > a:nth-child(3)',
);

[...updatesAnchors, ...noteAnchors].forEach(replaceDateTime);
