<template>
    <div class="header">
    <header>
        <h1>Trading Journal</h1>
        <nav>
            <router-link to="/">Dashboard</router-link>
            <router-link to="/trades">Trades</router-link>
            <router-link to="/analytics">Analytics</router-link>
            <router-link to="/settings">Settings</router-link>
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
