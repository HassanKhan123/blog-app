<template>
<div class="posts-page">
    <PostsList :posts="loadedPosts"/>
</div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList";
export default {
    data(){
        return {
            loadedPosts: [{
                        id: "1",
                        title: "Post Title",
                        previewText: "Post content",
                        thumbnail: "https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg",
                    },
                    {
                        id: "2",
                        title: "Post Title",
                        previewText: "Post content",
                        thumbnail: "https://s27389.pcdn.co/wp-content/uploads/2019/10/retail-innovation-changing-tech-consumer-employee-demands-1024x440.jpeg",
                    },
                ],
        }
    },
    components: {
        PostsList,
    },
};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
