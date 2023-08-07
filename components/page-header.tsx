import classNames from "classnames"
import { BreadcrumbsProps, Breadcrumbs } from "components/breadcrumbs"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  breadcrumbs?: BreadcrumbsProps["items"]
}

export function PageHeader({
  heading,
  breadcrumbs,
  children,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={classNames("container", className)} {...props}>
      {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div
        className={classNames(
          "pageheader flex items-center py-10 text-text",
          children ? "justify-between" : "justify-center"
        )}
      >
        <h1 className=" max-w-4xl text-2xl font-semibold text-left md:text-5md lg:text-7xl">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  )
}
