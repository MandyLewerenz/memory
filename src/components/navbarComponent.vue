<template>
    <nav v-if="isHidden" class="navbar navbar-expand-lg navbar-light stroke">
        <div class="container-fluid h-100">

            <a class="navbar-logo h-100" href="#landingpage" v-on:click="isHidden = false;">
                <img src="../assets/logo.png" alt="avatar" class="mh-100" />
            </a>

            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item me-5">
                        <h4 class="m-0 numberOfPairs">{{ counterPaired / 2 }} / {{ numberOfPairs }}</h4>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isHidden: false,
            counterPaired: 0,
        }
    }
}
</script>