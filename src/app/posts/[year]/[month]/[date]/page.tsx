import { PostsList } from "../../../../../components/postsList/postsList";
import { Suspense } from "react";

const DatePostsList = ({ params }) => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList filter={params} />
        </Suspense>
    );
};

export default DatePostsList;
