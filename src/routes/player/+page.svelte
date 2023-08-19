<script>
    export let data;
</script>

<article>
    <h1>This is my video player</h1>

    <ul>
        {#each data.videos as {name, url}}
            <li><a href={url}>{name}</a></li>
        {/each}
    </ul>
</article>
