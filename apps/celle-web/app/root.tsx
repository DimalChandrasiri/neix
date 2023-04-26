import stylesheet from "~/styles/styles.tailwind.css";
import { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="bg-gray-100">
                <div className="mx-auto bg-white shadow-slate-500 drop-shadow-sm">
                    <div className="flex w-2/3 pr-4 pl-4 h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-max h-10 max-w-xs"
                                    src="logo.png"
                                    alt="Your Company"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
