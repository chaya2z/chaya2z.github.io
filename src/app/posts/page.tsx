import { Suspense } from "react";
import { PostsList } from "../../components/postsList/postsList";

const AllPostsList = async () => {
    return (
        <Suspense fallback={<>aaa</>}>
            <PostsList />
        </Suspense>
    );
};

export default AllPostsList;
