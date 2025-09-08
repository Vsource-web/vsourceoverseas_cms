import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_us_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    about_cards: Schema.Attribute.Component<'about-us.about-card', true>;
    chairman: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    subheadings: Schema.Attribute.Component<'about-us.subheadings', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_cards';
  info: {
    displayName: 'about_card';
  };
  attributes: {
    count: Schema.Attribute.BigInteger;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface AboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_about_us_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsManagementTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_us_management_teams';
  info: {
    displayName: 'Management_team';
  };
  attributes: {
    description: Schema.Attribute.Text;
    members: Schema.Attribute.Component<'about-us.member', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsMember extends Struct.ComponentSchema {
  collectionName: 'components_about_us_members';
  info: {
    displayName: 'member';
  };
  attributes: {
    bio: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface AboutUsSubheadings extends Struct.ComponentSchema {
  collectionName: 'components_about_us_subheadings';
  info: {
    displayName: 'subheadings';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface BlocksAboutCount extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_counts';
  info: {
    displayName: 'About_count';
  };
  attributes: {
    About_text: Schema.Attribute.String;
    count: Schema.Attribute.BigInteger;
    image_or_gif: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface BlocksAboutList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_lists';
  info: {
    displayName: 'About_list';
  };
  attributes: {
    about_text: Schema.Attribute.String;
    bold_text: Schema.Attribute.String;
    Image_or_gif: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface BlocksAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_uses';
  info: {
    displayName: 'About_us';
  };
  attributes: {
    about_list: Schema.Attribute.Component<'blocks.about-list', true>;
    About_us_count: Schema.Attribute.Component<'blocks.about-count', true>;
    chairmanImage: Schema.Attribute.Media<'images' | 'files'>;
    SubTitle_1: Schema.Attribute.String;
    SubTitle_3: Schema.Attribute.String;
    SubTitlt_2: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksCompany extends Struct.ComponentSchema {
  collectionName: 'components_blocks_companies';
  info: {
    displayName: 'company';
  };
  attributes: {
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface BlocksComprehensive extends Struct.ComponentSchema {
  collectionName: 'components_blocks_comprehensive_s';
  info: {
    displayName: 'Comprehensive ';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.comprehensive-cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services_list: Schema.Attribute.Component<'elements.service-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksStudyDestination extends Struct.ComponentSchema {
  collectionName: 'components_blocks_study_destinations';
  info: {
    displayName: 'study destination';
  };
  attributes: {
    description: Schema.Attribute.Text;
    study_cards: Schema.Attribute.Component<'elements.study-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSuccessStories extends Struct.ComponentSchema {
  collectionName: 'components_blocks_success_stories';
  info: {
    displayName: 'success_stories';
  };
  attributes: {
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsComprehensiveCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_comprehensive_cards';
  info: {
    displayName: 'Comprehensive_cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    external_url: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    logo: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'service_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsStudyCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_study_cards';
  info: {
    displayName: 'study_cards';
  };
  attributes: {
    country: Schema.Attribute.String;
    descriptions: Schema.Attribute.Component<
      'elements.study-description',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    tag: Schema.Attribute.String;
  };
}

export interface ElementsStudyDescription extends Struct.ComponentSchema {
  collectionName: 'components_elements_study_descriptions';
  info: {
    displayName: 'study_description';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    feedback: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about': AboutUsAbout;
      'about-us.about-card': AboutUsAboutCard;
      'about-us.hero': AboutUsHero;
      'about-us.management-team': AboutUsManagementTeam;
      'about-us.member': AboutUsMember;
      'about-us.subheadings': AboutUsSubheadings;
      'blocks.about-count': BlocksAboutCount;
      'blocks.about-list': BlocksAboutList;
      'blocks.about-us': BlocksAboutUs;
      'blocks.company': BlocksCompany;
      'blocks.comprehensive': BlocksComprehensive;
      'blocks.services': BlocksServices;
      'blocks.study-destination': BlocksStudyDestination;
      'blocks.success-stories': BlocksSuccessStories;
      'elements.comprehensive-cards': ElementsComprehensiveCards;
      'elements.link': ElementsLink;
      'elements.service-card': ElementsServiceCard;
      'elements.study-cards': ElementsStudyCards;
      'elements.study-description': ElementsStudyDescription;
      'elements.testimonial': ElementsTestimonial;
    }
  }
}
