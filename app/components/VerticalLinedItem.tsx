type Props = {
  title: string;
};

export default function VerticalLinedItem(
  props: React.PropsWithChildren<Props>
) {
  const { children, title } = props;
  return (
    <div className="relative mx-auto max-w-5xl border-l border-secondary-light py-2 dark:border-secondary-dark">
      <div className="absolute left-[-5.5px] top-[0] h-[10px] w-[10px] rounded-full bg-secondary-light dark:bg-secondary-dark" />
      <div className="pl-4">
        <h5 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">
          {title}
        </h5>
        {children}
      </div>
    </div>
  );
}
