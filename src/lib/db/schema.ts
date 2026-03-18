import { pgTable, serial, text, timestamp, boolean, varchar } from 'drizzle-orm/pg-core';

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  serviceType: varchar('service_type', { length: 100 }),
  message: text('message').notNull(),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

export const serviceRequests = pgTable('service_requests', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  address: text('address'),
  serviceType: varchar('service_type', { length: 100 }).notNull(),
  urgency: varchar('urgency', { length: 50 }),
  description: text('description').notNull(),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow(),
});

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 500 }).notNull(),
  slug: varchar('slug', { length: 500 }).notNull().unique(),
  excerpt: text('excerpt'),
  body: text('body').notNull(),
  featuredImage: text('featured_image'),
  category: varchar('category', { length: 100 }),
  published: boolean('published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
