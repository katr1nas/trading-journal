<template>
    <div class="header">
    <header>
        <h1>Trading Journal</h1>
        <nav>
            <a href="#">Trades</a>
            <a href="#">Dashboard</a>
            <a href="#">Analytics</a>
            <a href="#">Settings</a>
        </nav>
    </header>
    </div>
</template>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;                 /* take full width */
        padding: 1rem 2rem;          /* top/bottom + left/right spacing */
        background-color: #1e293b;   /* dark blue-gray */
        color: white;

        position: fixed;             /* stick to top */
        top: 0;
        left: 0;
}

    nav a {
        margin-left: 1rem;
        text-decoration: none;
        color: white;
}

    nav a:hover {
        color: #38bdf8;              /* light blue hover */
}
</style>
