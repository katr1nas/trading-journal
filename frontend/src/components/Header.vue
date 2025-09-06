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
    .header {
        position:fixed;
        top:0;
        left:0;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2c3e50;
        color: white;
        padding: 10px 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    nav a {
        color: white;
        margin-left: 15px;
        text-decoration: none;
        font-weight: bold;
    }

    nav a:hover {
        text-decoration: underline;
    }
</style>
