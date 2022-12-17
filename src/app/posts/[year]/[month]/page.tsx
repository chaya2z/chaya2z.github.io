import { Suspense } from "react";
import { PostsList } from "../../../../components/postsList/postsList";

const MonthPostsList = async ({ params }) => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList filter={params} />
        </Suspense>
    );
};

export default MonthPostsList;
