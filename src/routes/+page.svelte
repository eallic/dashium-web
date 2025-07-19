<script lang="ts">
    import Card from "$lib/Card.svelte";
    import { onMount } from "svelte";
    import { getLevelCount } from "$lib/api/level";
    import { getUserCount } from "$lib/api/user";

    let userCount: string = "0";
    let levelCount: string = "0";

    onMount(async () => {
        userCount = await getUserCount();
        levelCount = await getLevelCount();
    });
</script>

<section class="hero is-small is-dark">
    <div class="hero-body">
        <p class="title">Dashium</p>
        <p class="subtitle">A Geometry Dash Private Server</p>
    </div>
</section>

<section class="section">
    <div class="columns">
        <div class="column">
            <Card message="{userCount} Registered Users" link="/" />
        </div>
        <div class="column">
            <Card message="{levelCount} Created Levels" link="/" />
        </div>
    </div>
</section>
