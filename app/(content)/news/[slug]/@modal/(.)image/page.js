
import Image from "next/image";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterseptedImagePage({ params }) {
    const { slug } = params;
    const newsItem = await getNewsItem(slug);

    if (!newsItem) {
        return notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={400} height={400} />
                </div>
            </dialog>

        </>
    );
}
