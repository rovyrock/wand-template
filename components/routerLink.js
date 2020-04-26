// 使用next做路由跳转
import Link from "next/link";

import getConfig from 'next/config'
const { linkPrefix } = getConfig().publicRuntimeConfig;
console.log("routerLink",getConfig())

export default function NextLink({ children, href, as }) {
  return <Link href={href} as={`${linkPrefix}${href}`}>{children}</Link>;
}
