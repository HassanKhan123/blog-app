<template>
<div class="admin-new-post-page">
    <section class="new-post-form">
        <AdminPostForm @submit="onSubmitted" />
    </section>
</div>
</template>

<script>
import axios from "axios";

import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
    components: {
        AdminPostForm,
    },
    layout: "admin",
    methods: {
        async onSubmitted(postData) {
            try {
                const res = await axios.post(
                    "https://nuxt-blog-55f05.firebaseio.com/posts.json", {
                        ...postData,
                        updatedDate: new Date()
                    }
                );

                console.log(res);
                this.$router.push("/admin");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new-post-form {
        width: 500px;
    }
}
</style>
