SELECT
    last_name,
    COUNT (emp_no) AS lastNameCount
FROM
    employees
GROUP BY
    last_name
ORDER BY
    LastNameCount DESC;