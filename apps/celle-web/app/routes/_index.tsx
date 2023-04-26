import type { V2_MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/react/dist/routeModules";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Celle - OpenAPI Visualizer" }];
};

export const Links: LinksFunction = () => {
    return [
        {
            rel: "preload",
            href: "/images/banner.jpg",
            as: "image",
        },
    ];
};

export default function Index() {
    return (
        <>
            <div className="mx-auto ">

            </div>
        </>

    );
}
