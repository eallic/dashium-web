<script>
    let { message, link } = $props();
</script>

<div
    class="box has-background-dark has-text-white has-text-centered is-size-2 has-text-weight-bold"
>
    <a href={link}>{message}</a>
</div>
