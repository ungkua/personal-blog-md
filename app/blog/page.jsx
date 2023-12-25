import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link"

export default function Blog() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map(post => (
        <div className="py-2">
            <div>
                <Link href={`/blog/posts/${post.slug}`}>
                    <h2 className="underline">{post.title}</h2>
                </Link>
                <p>{post.subtitle}</p>
                <p className="pt-2 text-sm font-light">{post.date}</p>
            </div>
        </div>
    ))
    return (
        <main className="flex-grow">
            <div className="container flex flex-col mx-auto py-20 px-6">
            <div className="max-w-md">
                    <div>
                        <h1 className="font-semibold text-2xl"> blog </h1>
                        <p className="py-3">
                            lorem ipsum
                        </p>
                    </div>
                    <div className="pt-10">
                        { postPreviews }
                    </div>
                </div>
            </div>
        </main>
    )
}
