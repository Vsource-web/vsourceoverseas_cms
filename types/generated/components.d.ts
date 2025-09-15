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

export interface ExploreUniAccordian extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_accordians';
  info: {
    displayName: 'accordian';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ExploreUniAdmissionReq extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_admission_reqs';
  info: {
    displayName: 'admission_req';
  };
  attributes: {
    requirement_items: Schema.Attribute.Component<
      'explore-uni.requirements',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ExploreUniAdmissions extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_admissions';
  info: {
    displayName: 'admissions';
  };
  attributes: {
    admissions_req: Schema.Attribute.Component<
      'explore-uni.admission-req',
      true
    >;
    description: Schema.Attribute.RichText;
  };
}

export interface ExploreUniAdmissionsReq extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_admissions_reqs';
  info: {
    displayName: 'admissions_req';
  };
  attributes: {};
}

export interface ExploreUniCostOfStudy extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_cost_of_studies';
  info: {
    displayName: 'cost_of_study';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    expenses_table: Schema.Attribute.Component<
      'explore-uni.expenses-table',
      true
    >;
  };
}

export interface ExploreUniCourses extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_courses';
  info: {
    displayName: 'courses';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    famous_courses: Schema.Attribute.Component<
      'explore-uni.courses-details',
      true
    >;
  };
}

export interface ExploreUniCoursesDetails extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_courses_details';
  info: {
    displayName: 'courses_details';
  };
  attributes: {
    annual_fee: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ExploreUniExpensesTable extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_expenses_tables';
  info: {
    displayName: 'expenses_table';
  };
  attributes: {
    annual_expenses: Schema.Attribute.String;
    types_of_expenses: Schema.Attribute.String;
  };
}

export interface ExploreUniFamousCourses extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_famous_courses';
  info: {
    displayName: 'famous_courses';
  };
  attributes: {
    annual_fee: Schema.Attribute.String;
    cource_name: Schema.Attribute.String;
    duration: Schema.Attribute.String;
  };
}

export interface ExploreUniFaq extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'explore-uni.accordian', true>;
  };
}

export interface ExploreUniGallery extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface ExploreUniImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_image_galleries';
  info: {
    displayName: 'image_gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface ExploreUniIntakeDes extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_intake_des';
  info: {
    displayName: 'intake_des';
  };
  attributes: {
    descriptions: Schema.Attribute.Component<'universities.uni-overview', true>;
  };
}

export interface ExploreUniIntakeDescription extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_intake_descriptions';
  info: {
    displayName: 'intake_description';
  };
  attributes: {
    title: Schema.Attribute.Component<'universities.uni-overview', true>;
  };
}

export interface ExploreUniIntakeQueries extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_intake_queries';
  info: {
    displayName: 'intake_queries';
  };
  attributes: {};
}

export interface ExploreUniIntakes extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_intakes';
  info: {
    displayName: 'intakes';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    famous_intakes: Schema.Attribute.Component<
      'universities.why-studyin-cards',
      true
    >;
  };
}

export interface ExploreUniJobs extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_jobs';
  info: {
    displayName: 'jobs';
  };
  attributes: {
    average_salary: Schema.Attribute.String;
    job_profiles: Schema.Attribute.String;
  };
}

export interface ExploreUniPlacements extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_placements';
  info: {
    displayName: 'placements';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    jobs: Schema.Attribute.Component<'explore-uni.jobs', true>;
    top_recruiters_imgs: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ExploreUniQueries extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_queries';
  info: {
    displayName: 'queries';
  };
  attributes: {
    question: Schema.Attribute.String;
  };
}

export interface ExploreUniRanking extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_rankings';
  info: {
    displayName: 'ranking';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'universities.why-studyin-cards', true>;
  };
}

export interface ExploreUniRequirements extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_requirements';
  info: {
    displayName: 'requirements';
  };
  attributes: {
    requirement_item: Schema.Attribute.Text;
  };
}

export interface ExploreUniScholarshipDetails extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_scholarship_details';
  info: {
    displayName: 'scholarship_details';
  };
  attributes: {
    amount: Schema.Attribute.String;
    level: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface ExploreUniScholarships extends Struct.ComponentSchema {
  collectionName: 'components_explore_uni_scholarships_s';
  info: {
    displayName: 'Scholarships ';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    scholarship_details: Schema.Attribute.Component<
      'explore-uni.scholarship-details',
      true
    >;
  };
}

export interface GalleryGallery360 extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_360s';
  info: {
    displayName: 'gallery_360';
  };
  attributes: {
    view360: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GalleryJourneyImages extends Struct.ComponentSchema {
  collectionName: 'components_gallery_journey_images';
  info: {
    displayName: 'journey_images';
  };
  attributes: {
    journey_images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface GalleryStudentImages extends Struct.ComponentSchema {
  collectionName: 'components_gallery_student_images';
  info: {
    displayName: 'studentImages';
  };
  attributes: {
    card_title: Schema.Attribute.Text;
    card_title1: Schema.Attribute.Text;
    students_images: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface UniversitiesAdmissions extends Struct.ComponentSchema {
  collectionName: 'components_universities_admissions';
  info: {
    displayName: 'admissions';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'universities.checklist', false>;
    description: Schema.Attribute.Text;
    subheading1: Schema.Attribute.String;
    subheading2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesChecklist extends Struct.ComponentSchema {
  collectionName: 'components_universities_checklists';
  info: {
    displayName: 'checklist';
  };
  attributes: {
    note: Schema.Attribute.Text;
    texts: Schema.Attribute.Component<'universities.text', true>;
  };
}

export interface UniversitiesCities extends Struct.ComponentSchema {
  collectionName: 'components_universities_cities';
  info: {
    displayName: 'cities';
  };
  attributes: {
    city: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    tables: Schema.Attribute.Component<'universities.table-data', true>;
  };
}

export interface UniversitiesHighlight extends Struct.ComponentSchema {
  collectionName: 'components_universities_highlights';
  info: {
    displayName: 'highlight';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UniversitiesImages extends Struct.ComponentSchema {
  collectionName: 'components_universities_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface UniversitiesLabelValues extends Struct.ComponentSchema {
  collectionName: 'components_universities_label_values';
  info: {
    displayName: 'label_values';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UniversitiesLivingCostTuitionFee
  extends Struct.ComponentSchema {
  collectionName: 'components_universities_living_cost_tuition_fees';
  info: {
    displayName: 'Living_Cost_Tuition_Fee';
  };
  attributes: {
    cities: Schema.Attribute.Component<'universities.cities', true>;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesOverview extends Struct.ComponentSchema {
  collectionName: 'components_universities_overviews';
  info: {
    displayName: 'overview';
  };
  attributes: {
    highlights: Schema.Attribute.Component<'universities.highlight', true>;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesStats extends Struct.ComponentSchema {
  collectionName: 'components_universities_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    acceptanceRate: Schema.Attribute.String;
    placement: Schema.Attribute.String;
    ratio: Schema.Attribute.String;
    Total_International_Students: Schema.Attribute.String;
  };
}

export interface UniversitiesStudentExprience extends Struct.ComponentSchema {
  collectionName: 'components_universities_student_expriences';
  info: {
    displayName: 'student_exprience';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    subheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesTableData extends Struct.ComponentSchema {
  collectionName: 'components_universities_table_data';
  info: {
    displayName: 'table_data';
  };
  attributes: {
    label_values: Schema.Attribute.Component<'universities.label-values', true>;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesText extends Struct.ComponentSchema {
  collectionName: 'components_universities_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UniversitiesUniOverview extends Struct.ComponentSchema {
  collectionName: 'components_universities_uni_overviews';
  info: {
    displayName: 'uni_overview';
  };
  attributes: {
    description: Schema.Attribute.RichText;
  };
}

export interface UniversitiesVisaRequirements extends Struct.ComponentSchema {
  collectionName: 'components_universities_visa_requirements';
  info: {
    displayName: 'visa_requirements';
  };
  attributes: {
    details: Schema.Attribute.Component<'universities.text', true>;
    subheading: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UniversitiesWhyStudyIn extends Struct.ComponentSchema {
  collectionName: 'components_universities_why_study_ins';
  info: {
    displayName: 'whyStudyIn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlights_points: Schema.Attribute.Component<
      'elements.study-description',
      true
    >;
    title: Schema.Attribute.String;
    whyStudyin_cards: Schema.Attribute.Component<
      'universities.why-studyin-cards',
      true
    >;
  };
}

export interface UniversitiesWhyStudyinCards extends Struct.ComponentSchema {
  collectionName: 'components_universities_why_studyin_cards';
  info: {
    displayName: 'whyStudyin_cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
      'explore-uni.accordian': ExploreUniAccordian;
      'explore-uni.admission-req': ExploreUniAdmissionReq;
      'explore-uni.admissions': ExploreUniAdmissions;
      'explore-uni.admissions-req': ExploreUniAdmissionsReq;
      'explore-uni.cost-of-study': ExploreUniCostOfStudy;
      'explore-uni.courses': ExploreUniCourses;
      'explore-uni.courses-details': ExploreUniCoursesDetails;
      'explore-uni.expenses-table': ExploreUniExpensesTable;
      'explore-uni.famous-courses': ExploreUniFamousCourses;
      'explore-uni.faq': ExploreUniFaq;
      'explore-uni.gallery': ExploreUniGallery;
      'explore-uni.image-gallery': ExploreUniImageGallery;
      'explore-uni.intake-des': ExploreUniIntakeDes;
      'explore-uni.intake-description': ExploreUniIntakeDescription;
      'explore-uni.intake-queries': ExploreUniIntakeQueries;
      'explore-uni.intakes': ExploreUniIntakes;
      'explore-uni.jobs': ExploreUniJobs;
      'explore-uni.placements': ExploreUniPlacements;
      'explore-uni.queries': ExploreUniQueries;
      'explore-uni.ranking': ExploreUniRanking;
      'explore-uni.requirements': ExploreUniRequirements;
      'explore-uni.scholarship-details': ExploreUniScholarshipDetails;
      'explore-uni.scholarships': ExploreUniScholarships;
      'gallery.gallery-360': GalleryGallery360;
      'gallery.journey-images': GalleryJourneyImages;
      'gallery.student-images': GalleryStudentImages;
      'universities.admissions': UniversitiesAdmissions;
      'universities.checklist': UniversitiesChecklist;
      'universities.cities': UniversitiesCities;
      'universities.highlight': UniversitiesHighlight;
      'universities.images': UniversitiesImages;
      'universities.label-values': UniversitiesLabelValues;
      'universities.living-cost-tuition-fee': UniversitiesLivingCostTuitionFee;
      'universities.overview': UniversitiesOverview;
      'universities.stats': UniversitiesStats;
      'universities.student-exprience': UniversitiesStudentExprience;
      'universities.table-data': UniversitiesTableData;
      'universities.text': UniversitiesText;
      'universities.uni-overview': UniversitiesUniOverview;
      'universities.visa-requirements': UniversitiesVisaRequirements;
      'universities.why-study-in': UniversitiesWhyStudyIn;
      'universities.why-studyin-cards': UniversitiesWhyStudyinCards;
    }
  }
}
