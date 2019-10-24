SELECT
    e.emp_no,
    e.last_name,
    e.first_name,
    de.dept_no,
    d.dept_name,
    de.from_date,
    de.to_date
FROM
    employees e
JOIN dept_emp de
    ON e.emp_no = de.emp_no
Join departments d
    ON de.dept_no = d.dept_no
ORDER BY
    e.last_name ASC;