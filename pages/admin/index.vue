<template>
<div class="admin-page">
    <section class="new-post">
        <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>

    <section class="existing-posts">
        <h1>Existing Posts</h1>
        <PostsList isAdmin :posts="loadedPosts" />
    </section>

</div>
</template>

<script>
import AppButton from "@/components/UI/AppButton";
import PostsList from "@/components/Posts/PostsList";
export default {
    data() {
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
        AppButton
    },
    layout: 'admin',
};
</script>

<style scoped>
.admin-page {
    padding: 20px;
}

.new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
}

.existing-posts h1 {
    text-align: center;
}
</style>
