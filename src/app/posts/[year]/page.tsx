import { Suspense } from "react";
import { PostsList } from "../../../components/postsList/postsList";

const YearPostsList = async ({ params }) => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList filter={params} />
        </Suspense>
    );
};

export default YearPostsList;
