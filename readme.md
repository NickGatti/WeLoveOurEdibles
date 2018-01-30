# WORKFLOW


## MMJ FALSE


Nav bar - About, contact, reviews, login/registration

As a MMJ false user I go to route “/“
I get redirected ‘/home” page

As a MMJ false user I go to route '/home'
I get rendered 'home'

As a MMJ false user when I go to route “/about”
I get rendered “about”

As a MMJ false user when I go to route “/contact”
I get rendered “contact”

As a MMJ false user when I go to route “/reviews”
I get a nav-search page with any true results omitted,
I get rendered “mmj-false-reviews”

As a MMJ false user when I go to route “/login”
I get rendered “login”


## MMJ TRUE


As a MMJ true user when I go to any other route
I get redirected back to “/home”

As a MMJ true user I go to route “/“
I get redirected ‘/home” page

As a MMJ true user when I go to route “/about”
I get rendered “about”

As a MMJ true when I go to route “/contact”
I get rendered “contact”

As a MMJ true user when I go to route “/reviews”
I get a nav-search page with any true results not omitted,
I get rendered “mmj-true-reviews”

As a MMJ true user when I go to route “/login”
I get rendered “login”

As a MMJ true when I go to route “/user”
I get rendered user control panel “user”

As a MMJ true user when I go to any other route
I get redirected back to “/home”


## ADMIN


As a admin user when I go to any other route
I get redirected back to “/home”

As a admin user I go to route “/“
I get redirected ‘/home” page

As a admin user when I go to route “/about”
I get rendered “about”

As a admin when I go to route “/contact”
I get rendered “contact”

As a admin user when I go to route “/reviews”
I get a nav-search page with any true results not omitted,
I get rendered “reviews”

As a admin user when I go to route “/login”
I get rendered “login”

As a admin when I go to route “/user”
I get rendered admin control panel “admin”
