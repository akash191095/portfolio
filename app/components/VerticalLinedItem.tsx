type Props = {
  title: string;
  logo: any;
  logoAlt: string;
};

export default function VerticalLinedItem(
  props: React.PropsWithChildren<Props>
) {
  const { children, title, logo, logoAlt } = props;
  return (
    <div className="mx-auto flex max-w-5xl items-start justify-center">
      {logo ? (
        <img src={logo} alt={logoAlt} className="w-16 pr-4 pt-4" />
      ) : null}
      <div className="relative w-full border-l border-secondary-light py-2 dark:border-secondary-dark">
        <div className="absolute left-[-5.5px] top-[0] h-[10px] w-[10px] rounded-full bg-secondary-light dark:bg-secondary-dark" />
        <div className="pl-4">
          <p className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">
            {title}
          </p>
          <div className="text-justify">{children}</div>
        </div>
      </div>
    </div>
  );
}
