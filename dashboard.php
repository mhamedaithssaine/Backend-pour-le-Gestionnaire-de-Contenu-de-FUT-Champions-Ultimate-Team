<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FUT Champions Dashboard</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            display: flex;
        }

        .sidebar {
            width: 250px;
            background-color: #f9fafb;
            border-right: 1px solid #eaeaea;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
        }

        .sidebar-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .sidebar-header .logo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .sidebar-menu {
            list-style: none;
            padding: 0;
            width: 100%;
        }

        .sidebar-menu li {
            margin: 10px 0;
            text-align: center;
        }

        .sidebar-menu li a {
            text-decoration: none;
            color: #333;
            display: block;
            padding: 10px;
            border-radius: 5px;
        }

        .sidebar-menu li a.active {
            background-color: #673ab7;
            color: #fff;
        }

        .user-info {
            text-align: center;
            margin-top: auto;
            padding-bottom: 20px;
        }

        .user-info .user-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .main-content {
            flex-grow: 1;
            padding: 20px;
            background-color: #f1f5f9;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .header h1 {
            margin: 0;
        }

        .search-bar input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .stats {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .stat-card {
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            flex: 1;
            margin: 0 10px;
        }

        .stat-card h2 {
            margin: 10px 0;
        }

        .stat-card p {
            color: #888;
            margin: 5px 0;
        }

        .table-container {
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            display: none;
        }

        .table-container.active {
            display: block;
        }

        .table-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .table-header .table-search {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .table-header .table-sort {
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table th, table td {
            padding: 10px;
            text-align: left;
        }

        table th {
            background-color: #f9fafb;
        }

        .status {
            padding: 5px 10px;
            border-radius: 5px;
            display: inline-block;
        }

        .status.active {
            background-color: #d4edda;
            color: #155724;
        }

        .status.inactive {
            background-color: #f8d7da;
            color: #721c24;
        }

        .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .pagination p {
            margin: 0;
        }

        .page-buttons {
            display: flex;
            align-items: center;
        }

        .page-buttons button {
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 5px 10px;
            margin: 0 2px;
            border-radius: 5px;
            cursor: pointer;
        }

        .page-buttons button.active {
            background-color: #673ab7;
            color: #fff;
        }

        .form-container {
            margin-top: 20px;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            display: none;
        }

        .form-container.active {
            display: block;
        }

        .form-container form {
            display: flex;
            flex-direction: column;
        }

        .form-container form input, .form-container form select, .form-container form button {
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form-container form button {
            background-color: #673ab7;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-header">
            <h2>FUT Champions</h2>
        </div>
        <ul class="sidebar-menu">
            <li><a href="#" class="active" data-target="dashboard">Dashboard</a></li>
            <li><a href="#" data-target="players">Players</a></li>
            <li><a href="#" data-target="teams">Teams</a></li>
            <li><a href="#" data-target="nationalities">Nationalities</a></li>
            <li><a href="#">Help</a></li>
        </ul>
    </div>
    <div class="main-content">
        <div class="header">
            <h1>Hello Admin 👋</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search...">
            </div>
        </div>
        <div class="stats">
            <div class="stat-card">
                <p>Total Players</p>
                <h2>150</h2>
                <p>↑10% this month</p>
            </div>
            <div class="stat-card">
                <p>Total Teams</p>
                <h2>30</h2>
                <p>↑5% this month</p>
            </div>
            <div class="stat-card">
                <p>Total Nationalities</p>
                <h2>2</h2>
                <p>↑0.5% this month</p>
            </div>
        </div>
        <div class="table-container active" id="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the FUT Champions Dashboard.</p>
        </div>
        <div class="table-container" id="players">
            <h2>All Players</h2>
            <button onclick="showForm('add-player')">Add Player</button>
            <div class="table-header">
                <p>Active Players</p>
                <input type="text" placeholder="Search..." class="table-search">
                <select class="table-sort">
                    <option>Sort by Newest</option>
                    <option>Sort by Oldest</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Nationality</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be populated from the database -->
                </tbody>
            </table>
            <div class="form-container" id="add-player">
                <form action="add_player.php" method="POST">
                    <h2>Add Player</h2>
                    <input type="text" name="name" placeholder="Player Name" required>
                    <input type="number" name="club_id" placeholder="Team ID" required>
                    <input type="number" name="nationalite_id" placeholder="Nationality ID" required>
                    <select name="position" required>
                        <option value="GK">GK</option>
                        <option value="CB1">CB1</option>
                        <option value="CB2">CB2</option>
                        <option value="RB">RB</option>
                        <option value="LB">LB</option>
                        <option value="MR">MR</option>
                        <option value="CM">CM</option>
                        <option value="ML">ML</option>
                        <option value="RW">RW</option>
                        <option value="SA">SA</option>
                        <option value="LW">LW</option>
                    </select>
                    <input type="number" name="Gk_id" placeholder="Goalkeeper Statistics ID (if applicable)">
                    <input type="number" name="joueurStatique_id" placeholder="Player Statistics ID (if applicable)">
                    <button type="submit">Add Player</button>
                </form>
            </div>
        </div>
        <div class="table-container" id="teams">
            <h2>All Teams</h2>
            <button onclick="showForm('add-team')">Add Team</button>
            <div class="table-header">
                <p>Active Teams</p>
                <input type="text" placeholder="Search..." class="table-search">
                <select class="table-sort">
                    <option>Sort by Newest</option>
                    <option>Sort by Oldest</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Country</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be populated from the database -->
                </tbody>
            </table>
            <div class="form-container" id="add-team">
                <form action="add_team.php" method="POST">
                    <h2>Add Team</h2>
                    <input type="text" name="name" placeholder="Team Name" required>
                    <input type="text" name="country" placeholder="Country" required>
                    <button type="submit">Add Team</button>
                </form>
            </div>
        </div>
        <div class="table-container" id="nationalities">
            <h2>All Nationalities</h2>
            <button onclick="showForm('add-nationality')">Add Nationality</button>
            <div class="table-header">
                <p>Active Nationalities</p>
                <input type="text" placeholder="Search..." class="table-search">
                <select class="table-sort">
                    <option>Sort by Newest</option>
                    <option>Sort by Oldest</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nationality Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Rows will be populated from the database -->
                </tbody>
            </table>
            <div class="form-container" id="add-nationality">
                <form action="add_nationality.php" method="POST">
                    <h2>Add Nationality</h2>
                    <input type="text" name="name" placeholder="Nationality Name" required>
                    <button type="submit">Add Nationality</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        document.querySelectorAll('.sidebar-menu li a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.table-container').forEach(container => {
                    container.classList.remove('active');
                });
                document.querySelectorAll('.form-container').forEach(form => {
                    form.classList.remove('active');
                });
                document.querySelectorAll('.sidebar-menu li a').forEach(a => {
                    a.classList.remove('active');
                });
                this.classList.add('active');
                document.getElementById(this.dataset.target).classList.add('active');
            });
        });

        function showForm(target) {
            document.querySelectorAll('.form-container').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(target).classList.add('active');
        }

        function editPlayer(id) {
            alert('Edit player with ID: ' + id);
        }

        function deletePlayer(id) {
            if (confirm('Are you sure you want to delete this player?')) {
                window.location.href = 'delete_player.php?id=' + id;
            }
        }

        function editTeam(id) {
            alert('Edit team with ID: ' + id);
        }

        function deleteTeam(id) {
            if (confirm('Are you sure you want to delete this team?')) {
                window.location.href = 'delete_team.php?id=' + id;
            }
        }

        function editNationality(id) {
            alert('Edit nationality with ID: ' + id);
        }

        function deleteNationality(id) {
            if (confirm('Are you sure you want to delete this nationality?')) {
                window.location.href = 'delete_nationality.php?id=' + id;
            }
        }
    </script>
</body>
</html>
