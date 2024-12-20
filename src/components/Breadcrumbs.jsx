import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Breadcrumbs = ({ crumbs }) => {
  return (
    <div className="flex flex-wrap container">
      <Breadcrumb>
        <BreadcrumbList className="flex flex-wrap items-center content-center py-5">
          {crumbs.map((crumb, index) => (
            <BreadcrumbItem key={index} className="capitalize font-medium">
              {index < crumbs.length - 1 ? (
                <BreadcrumbLink href={crumb.link}>{crumb.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              )}
              {index < crumbs.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
