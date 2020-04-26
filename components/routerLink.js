// 使用next做路由跳转
import Link from "next/link";

export default function NextLink({ children, href, as }) {
  return <Link href={href}>{children}</Link>;
}
