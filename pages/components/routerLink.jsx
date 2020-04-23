// 使用next做路由跳转
import { useRouter } from "next/router";

export default function Link({ children, href }) {
  const router = useRouter();
  return (
    <a
      className="admin-link"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href);
      }}
    >
      {children}
    </a>
  );
}