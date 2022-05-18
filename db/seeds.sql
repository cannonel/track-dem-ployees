 INSERT INTO department (id, department_name)
VALUES
  (1, 'Engineer'),
  (2, 'Finance'),
  (3, 'Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Sales Lead', 60000, 2),
  ('Salesperson', 50000, 2),
  ('Lead Engineer', 100000, 1),
  ('Software Engineer', 100000, 1),
  ('Account Manager', 70000, 2),
  ('Accountant', 60000, 2),
  ('Legal Team Lead', 80000, 3),
  ('Lawyer', 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, 1),
  ('Piers', 'Gaveston', 3, 0),
  ('Charles', 'LeRoi', 4, 1),
  ('Katherine', 'Mansfield', 5, 2),
  ('Dora', 'Carrington', 6, 0),
  ('Edward', 'Bellamy', 7, 2),
  ('Montague', 'Summers', 8, 1);

