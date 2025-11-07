import { FormEvent, ChangeEvent, CSSProperties } from 'react';
import styles from '@/app/page.module.css';
import { CopyShape } from '@/lib/getCopy';
import InteractiveLink from '@/components/ui/InteractiveLink';

export type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type ContactSectionProps = {
  contact: CopyShape['contact'];
  accessibility: CopyShape['accessibility'];
  formState: ContactFormState;
  onFormChange: (field: keyof ContactFormState, value: string) => void;
  onSubmit: () => void;
  onCardActivate: (url: string) => void;
  isMounted: boolean;
  getDelayStyle: (index?: number, baseDelay?: number) => CSSProperties | undefined;
};

const ContactSection = ({
  contact,
  accessibility,
  formState,
  onFormChange,
  onSubmit,
  onCardActivate,
  isMounted,
  getDelayStyle,
}: ContactSectionProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleFieldChange = (field: keyof ContactFormState) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onFormChange(field, event.target.value);
    };
  };

  return (
    <section id="contact" className={`${styles.section} space-y-10`}>
      <div className={`space-y-4 ${isMounted ? styles.fadeInUp : ''}`}>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">{contact.title}</h2>
        <p className="max-w-3xl text-lg leading-7 text-slate-300">{contact.description}</p>
      </div>
      <div className={styles.contactGrid}>
        <form
          className={`${styles.card} space-y-6 ${isMounted ? styles.fadeInUp : ''}`}
          onSubmit={handleSubmit}
          aria-label={accessibility.submitForm}
          style={getDelayStyle(0, 0.18)}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
              <span>{contact.form.nameLabel}</span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleFieldChange('name')}
                placeholder={contact.form.namePlaceholder}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
              <span>{contact.form.emailLabel}</span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleFieldChange('email')}
                placeholder={contact.form.emailPlaceholder}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-200">
            <span>{contact.form.messageLabel}</span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleFieldChange('message')}
              placeholder={contact.form.messagePlaceholder}
              rows={6}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 outline-none transition duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-[0_12px_40px_-18px_rgba(56,189,248,1)]"
            aria-label={accessibility.submitForm}
          >
            {contact.form.submit}
          </button>
        </form>
        <div className="grid gap-6">
          {contact.cards.map((card, index) => (
            <InteractiveLink
              key={card.title}
              href={card.url}
              className={`${styles.contactCard} flex flex-col gap-3 text-slate-200 ${
                isMounted ? styles.fadeInUp : ''
              }`}
              style={getDelayStyle(index, 0.24)}
              aria-label={`${contact.ariaCardPrefix}: ${card.title}`}
              onActivate={() => onCardActivate(card.url)}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{card.title}</span>
              <p className="text-base leading-7 text-slate-300">{card.description}</p>
              <span className="text-sm font-semibold text-sky-300">{card.cta}</span>
            </InteractiveLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
