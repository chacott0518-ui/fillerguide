type ChecklistBlockProps = {
  items: string[];
};

export function ChecklistBlock({ items }: ChecklistBlockProps) {
  return (
    <ul className="cg-visual cg-visual--checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="cg-visual__check" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
