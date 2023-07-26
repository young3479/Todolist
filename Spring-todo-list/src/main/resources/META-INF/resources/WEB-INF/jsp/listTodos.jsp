<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<head>
    <link href="webjars/bootstrap/5.1.3/css/bootstrap.css" rel="stylesheet">
    <title> My Second HTML Page - JSP</title>
</head>
<body>
<div class="container">
    <h1>welcome Yubin</h1>
    <h3>Your Todos</h3>
    <table class="table">
        <thead>
            <tr>
                <th>id</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>is Done?</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${todos}" var = "todo">
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.description}</td>
                    <td>${todo.targetDate}</td>
                    <td>${todo.done}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <a href="add-todo" class="btn btn-success">Add Todo</a>
</div>
<script src="webjars/bootstrap/5.1.3/js/bootstrap.js"></script>
<script src="webjars/jquery/3.6.0/jquery.js"></script>
</body>
</html>