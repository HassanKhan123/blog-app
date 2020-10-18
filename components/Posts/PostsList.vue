<template>
<section class="posts-list">
    <PostPreview :is-admin="isAdmin" id="1" title="Post Title" previewText="Post Content" thumbnail="https://sm.mashable.com/mashable_pk/photo/default/tech_ntqz.jpg" />
    <PostPreview :is-admin="isAdmin" id="2" title="Post Title 2" previewText="Post Content 2" thumbnail="https://sm.mashable.com/mashable_pk/photo/default/tech_ntqz.jpg" />
</section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
    components: {
        PostPreview,
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style scoped>
.posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
