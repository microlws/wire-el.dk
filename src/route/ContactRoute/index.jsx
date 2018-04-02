import React from "react"
import { connect } from "react-redux"
import { Formik, Field } from "formik"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import MenuItem from "material-ui/Menu/MenuItem"
import TextField from "material-ui/TextField"
import "./index.css"

const initialValues = {
  name: "",
  phone: "",
  email: "",
  aboutSubject: "varmeanlæg",
}

const aboutSubjects = [
  {
    value: "varmeanlæg",
    label: "Varmeanlæg",
  },
  {
    value: "dørtelefoner",
    label: "Dørtelefoner",
  },
  {
    value: "elanlæg",
    label: "El-Anlæg",
  },
]

const ContactRoute = ({ width, deviceBreakpoint }) => (
  <div className="ContactRoute">
    <div className="ContactRoute__inner">
      <Formik
        initialValues={initialValues}
        validate={values => {
          // same as above, but feel free to move this into a class method now.
          const errors = {}

          if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Ugyldig email adresse"
          }

          if (!values.name) {
            errors.name = "Skal udfyldes"
          }

          // If neither email nor phone has any value
          // give both an error saying one of them should have a value
          if (!values.email && !values.phone) {
            errors.email = "Du skal angive en email eller et telefon nummer"
            errors.phone = "Du skal angive en email eller et telefon nummer"
          }

          return errors
        }}
        onSubmit={(a, b, c, d) => {
          // console.log(a, b, c, d)
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset, dirty, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Card className="ContactRoute__card">
              <CardContent>
                <Typography gutterBottom color="textSecondary">
                  Udfyld nedenstående formular og vi vil kontakte dig på indenfor 48 timer.
                </Typography>
                <div className="ContactRoute__fields">
                  <Field
                    name="name"
                    render={({ field, form }) => (
                      <TextField
                        {...field}
                        className="ContactRoute__field ContactRoute__field-name"
                        error={!!form.errors.name}
                        fullWidth={width < deviceBreakpoint}
                        helperText={form.errors.name ? form.errors.name : ""}
                        id="name"
                        inputProps={{ size: width > deviceBreakpoint ? "60" : "", placeholder: "Indtast dit navn her" }}
                        label="Dit navn"
                        required={true}
                      />
                    )}
                  />
                  <Field
                    name="email"
                    render={({ field, form }) => (
                      <TextField
                        {...field}
                        className="ContactRoute__field ContactRoute__field-email"
                        error={!!form.errors.email}
                        fullWidth={width < deviceBreakpoint}
                        helperText={form.errors.email ? form.errors.email : ""}
                        id="email"
                        inputProps={{
                          size: width > deviceBreakpoint ? "35" : "",
                          type: "email",
                          placeholder: "Indtast en gyldig email her",
                        }}
                        label="Kontakt mig via e-mail"
                      />
                    )}
                  />
                  <Field
                    name="phone"
                    render={({ field, form }) => (
                      <TextField
                        {...field}
                        className="ContactRoute__field ContactRoute__field-phone"
                        error={!!form.errors.phone}
                        helperText={form.errors.phone ? form.errors.phone : ""}
                        id="phone"
                        inputProps={{ size: width > deviceBreakpoint ? "24" : "", type: "tel" }}
                        label="Kontakt mig på telefon"
                        fullWidth={width < deviceBreakpoint}
                      />
                    )}
                  />
                  <Field
                    name="aboutSubject"
                    render={({ field, form }) => (
                      <TextField
                        {...field}
                        className="ContactRoute__field ContactRoute__field-aboutSubject"
                        fullWidth={true}
                        helperText="Jeg vil gerne kontaktes angående"
                        id="aboutSubject"
                        select
                        native={width < deviceBreakpoint}
                      >
                        {aboutSubjects.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button disabled={!dirty} onClick={handleReset} type="reset" size="small" color="primary">
                  Fortryd Ændringer
                </Button>
                <Button disabled={!isValid} type="submit" size="small" color="primary">
                  Send Formular
                </Button>
              </CardActions>
            </Card>
          </form>
        )}
      />
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    width: state.app.width,
    deviceBreakpoint: state.app.deviceBreakpoint,
  }
}

export default connect(mapStateToProps, null)(ContactRoute)
