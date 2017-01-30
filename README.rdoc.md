#![](https://drive.google.com/a/meltwater.org/file/d/0By*Yw0ube4T*S0owVlhaY1lxclU/view?usp=sharing)

#Using the [Kitchen*APP database model](https://docs.google.com/drawings/d/1F1RVuzm_t71S*9cck5HFtb4wBFHzKBv_mhCKzZiAKQg/edit?ts=587ffdeb)

#Testing specs for Users:

        first_name:             string
        last_name:             string
        email:                     string
        nationality:             string
        sex:                        string


##FIRST NAME
* first_name must be _present_
* first_name must be within 5 characters and less than 100 characters and cannot have special characters


##LAST NAME
* last_name must be _present_
* last_name must be within 5 characters and less than 100 characters and cannot have special characters

##EMAIL
* email must be _present_
* email must be within 1 characters and less than 101 characters
* email must be unique
* email address must be valid


##NATIONALITY
* nationality must be _present_
* nationality must be one of the countries in the world

##SEX
* sex must be _present_
* sex must be either MALE, FEMALE or OTHERS

__________________________________________________________________________________________________________

#Testing specs for Meal:

        name:                                   string
        picture_path:                        string
        description:                           text
        nutrient_value:                      text



##NAME
* name must be _present_
* name must be within 5 characters and less than 100 characters and cannot have special characters


##PICTURE_PATH
* picture_path must be _present_
* picture_path must be within 5 characters and less than 100 characters and cannot have special characters
* picture_path must not be null

##DESCRIPTION
* description must be _present_
* description must be within 40 characters and less than 500 characters




__________________________________________________________________________________________________________
