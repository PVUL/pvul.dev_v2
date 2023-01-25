import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast, { Toaster as ReactHotToaster } from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Toaster } from '../Toaster'

import styles from './ContactForm.module.scss'

const schema = yup.object({
  name: yup.string().trim().required('Name is blank'),
  email: yup
    .string()
    .trim()
    .required('Email is blank')
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email format incorrect'
    ),
  message: yup
    .string()
    .trim()
    .required('Message is blank')
    .min(5, 'Message is too short'),
})

type Inputs = {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  const { register, reset, handleSubmit, formState } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const { errors, isSubmitted } = formState

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const request = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    const result = await request.json()
    let message = "Thanks for your message, I'll get back to you shortly! 😀"

    if (result.data !== 'ok') {
      message = 'Whoops, there was an error. Please try again later.'
    }

    toast.custom((t) => <Toaster t={t} message={message} />, {
      id: 'successfulContact',
      position: 'top-right',
      duration: 6000,
    })
  }

  return (
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
          <label className="label">
            <span className="label-text">Name</span>
            {isSubmitted && errors.name && (
              <span className={styles.errorText}>{errors.name.message}</span>
            )}
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={styles.textInput}
            placeholder="Name"
          />
        </div>
        <div className={styles.formField}>
          <label className="label">
            <span className="label-text">Email</span>
            {isSubmitted && errors.email && (
              <span className={styles.errorText}>{errors.email.message}</span>
            )}
          </label>
          <input
            id="email"
            {...register('email')}
            className={styles.textInput}
            placeholder="Email address"
          />
        </div>
        <div className={styles.formField}>
          <label className="label">
            <span className="label-text">Message</span>
            {isSubmitted && errors.message && (
              <span className={styles.errorText}>{errors.message.message}</span>
            )}
          </label>
          <textarea
            {...register('message')}
            className={styles.textArea}
            id="message"
            rows={3}
            placeholder="Message"
          />
        </div>

        <input
          disabled={!!errors.email || !!errors.name || !!errors.message}
          type="submit"
          value="send"
          className="mt-2 btn btn-block"
        />
      </form>
      <ReactHotToaster />
    </div>
  )
}
