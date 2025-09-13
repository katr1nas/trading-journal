<template>
    <div class="trades-container">
        <h1>Trades Journal</h1>

        <section class="add-trade">
            <h2>Add New Trade</h2>
            <form @submit.prevent="addTrade">
                <label>Date: <input type="date" v-model="newTrade.date" required/></label>
                <label>Asset: <input type="text" v-model="newTrade.asset" placeholder="e.g EURUSD"required/></label>
                <label>Type:
                    <select v-model="newTrade.type" required>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                    </select>
                </label>
                <label>Entry Price: <input type="number" v-model.number="newTrade.entryPrice" step="0.0001" required/></label>
                <label>Exit Price: <input type="number" v-model.number="newTrade.exitPrice" step="0.0001" required/></label>
                <label>Position Size: <input type="number" v-model.number="newTrade.positionSize" step="0.01" required/></label>
                <label>Profit/Loss: <input type="number" v-model.number="newTrade.profitLoss" step="0.01" required/></label>
                <label>Notes: <textarea v-model="newTrade.notes" placeholder="Additional notes..."></textarea></label>
                <button type="submit">Add Trade</button>
            </form>
        </section>

        <section class="trades-list">
            <h2>Trades History</h2>
            <table v-if="trades.length > 0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Asset</th>
                        <th>Type</th>
                        <th>Entry Price</th>
                        <th>Exit Price</th>
                        <th>Position Size</th>
                        <th>Profit/Loss</th>
                        <th>Notes</th>]
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(trade, index) in trades" :key="index">
                        <td>{{ trade.date }}</td>
                        <td>{{ trade.asset }}</td>
                        <td>{{ trade.type }}</td>
                        <td>{{ trade.entryPrice.toFixed(4) }}</td>
                        <td>{{ trade.exitPrice.toFixed(4) }}</td>
                        <td>{{ trade.positionSize.toFixed(2) }}</td>
                        <td :class="{'profit': trade.profitLoss >= 0, 'loss': trade.profitLoss < 0}">
                            {{ trade.profitLoss.toFixed(2) }}
                        </td>
                        <td>{{ trade.notes }}</td>
                        <td><button @click="deleteTrade(index)">Delete</button></td>
                        <td><button @click="editTrade(index)">Edit</button></td>
                    </tr>
                    </tbody>
            </table>
            <p v-else>No trades yet. Add one above!</p>
        </section>
    </div>
</template>

<script>

export default {
    data () {
        return {
            newTrade: {date: '', asset: '', type: '', entryPrice: null, exitPrice: null, positionSize: null, profitLoss: null, notes: ''},
            trades: []
        };
    },
    
    methods: {
        addTrade() {
            this.trades.push({...this.newTrade});
            this.newTrade = {date: '', asset: '', type: '', entryPrice: null, exitPrice: null, positionSize: null, profitLoss: null, notes: ''};
        },
        deleteTrade(index) {
            this.trades.splice(index, 1);
        },
        editTrade(index) {
            const trade = this.trades[index];
            this.newTrade = {...trade};
            this.trades.splice(index, 1);
        }
    }
}

</script>

<style>
  .trades-container { max-width: 800px; margin: 0 auto; padding: 2rem; }
  .add-trade form { display: grid; gap: 1rem; }
  table { width: 100%; border-collapse: collapse; margin-top: 2rem; }
  th, td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
  button { background: #007bff; color: white; border: none; padding: 0.5rem; cursor: pointer; }
  button:hover { background: #0056b3; }
</style>