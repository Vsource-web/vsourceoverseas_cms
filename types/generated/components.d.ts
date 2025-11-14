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
    count: Schema.Attribute.String;
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

export interface AdmissionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_admissions_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    cards: Schema.Attribute.Component<'about-us.about-card', true>;
    chairman: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface AdmissionsSliders extends Struct.ComponentSchema {
  collectionName: 'components_admissions_sliders';
  info: {
    displayName: 'sliders';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface BlocksFees extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fees';
  info: {
    displayName: 'fees';
  };
  attributes: {
    excludes: Schema.Attribute.Component<'universities.text', true>;
    fees_details: Schema.Attribute.Component<'blocks.years-format', true>;
    GEL: Schema.Attribute.Decimal;
    includes: Schema.Attribute.Component<'universities.text', true>;
    RUB: Schema.Attribute.Decimal;
    USD: Schema.Attribute.Decimal;
  };
}

export interface BlocksHostelFacility extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hostel_facilities';
  info: {
    displayName: 'hostel_facility';
  };
  attributes: {
    hostel: Schema.Attribute.Component<'universities.text', true>;
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
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Component<'elements.testimonial', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksYearsFormat extends Struct.ComponentSchema {
  collectionName: 'components_blocks_years_formats';
  info: {
    displayName: 'years format';
  };
  attributes: {
    hostel: Schema.Attribute.String;
    insurance: Schema.Attribute.String;
    notes: Schema.Attribute.String;
    other: Schema.Attribute.String;
    tuition: Schema.Attribute.String;
    year: Schema.Attribute.String;
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

export interface FintechAboradEducation extends Struct.ComponentSchema {
  collectionName: 'components_fintech_aborad_educations';
  info: {
    displayName: 'aborad_education';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    bank: Schema.Attribute.Component<'fintech.banks', false>;
    description: Schema.Attribute.RichText;
    desktop_img: Schema.Attribute.Media<'files' | 'images'>;
    eligible: Schema.Attribute.Component<'fintech.eligible-table', true>;
    eligible_description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    heading_schemes: Schema.Attribute.String;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
    list: Schema.Attribute.Component<'fintech.list-check', true>;
    mobile_img: Schema.Attribute.Media<'images' | 'files'>;
    schemes_lenders: Schema.Attribute.Component<
      'fintech.schemes-lenders',
      true
    >;
  };
}

export interface FintechAboutCards extends Struct.ComponentSchema {
  collectionName: 'components_fintech_about_cards';
  info: {
    displayName: 'about_cards';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface FintechAboutFintech extends Struct.ComponentSchema {
  collectionName: 'components_fintech_about_finteches';
  info: {
    displayName: 'about_fintech';
  };
  attributes: {
    about_cards: Schema.Attribute.Component<'about-us.about-card', true>;
    chairman: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    subheadings: Schema.Attribute.Component<'about-us.subheadings', true>;
    title: Schema.Attribute.String;
  };
}

export interface FintechAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_fintech_about_uses';
  info: {
    displayName: 'about_us';
  };
  attributes: {
    about_number: Schema.Attribute.Component<'about-us.about-card', true>;
    chairman: Schema.Attribute.Media<'images' | 'files'>;
    content: Schema.Attribute.Component<'fintech.about-us-content', true>;
    heading: Schema.Attribute.String;
  };
}

export interface FintechAboutUsContent extends Struct.ComponentSchema {
  collectionName: 'components_fintech_about_us_contents';
  info: {
    displayName: 'about_us_content';
  };
  attributes: {
    gif: Schema.Attribute.Media<'images' | 'files'>;
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FintechBankAccount extends Struct.ComponentSchema {
  collectionName: 'components_fintech_bank_accounts';
  info: {
    displayName: 'bank_account';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    top_bank_heading: Schema.Attribute.String;
    top_banks: Schema.Attribute.Component<'fintech.top-bank', true>;
  };
}

export interface FintechBanks extends Struct.ComponentSchema {
  collectionName: 'components_fintech_banks';
  info: {
    displayName: 'banks';
  };
  attributes: {
    bank: Schema.Attribute.Component<'fintech.banks-images', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface FintechBanksImages extends Struct.ComponentSchema {
  collectionName: 'components_fintech_banks_images';
  info: {
    displayName: 'banks_images';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface FintechBenefits extends Struct.ComponentSchema {
  collectionName: 'components_fintech_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    list: Schema.Attribute.Component<'fintech.list-check', true>;
    title: Schema.Attribute.String;
  };
}

export interface FintechBenfits extends Struct.ComponentSchema {
  collectionName: 'components_fintech_benfits';
  info: {
    displayName: 'benfits';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface FintechBlockedAccountProviders extends Struct.ComponentSchema {
  collectionName: 'components_fintech_blocked_account_providers';
  info: {
    displayName: 'blocked_account_providers';
  };
  attributes: {
    banking_model: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    monthly_fee: Schema.Attribute.String;
    processing_fee: Schema.Attribute.String;
    processing_time: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FintechBlockedAccounts extends Struct.ComponentSchema {
  collectionName: 'components_fintech_blocked_accounts';
  info: {
    displayName: 'blocked_accounts';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    blocked_account_providers: Schema.Attribute.Component<
      'fintech.blocked-account-providers',
      true
    >;
    description: Schema.Attribute.Text;
    faq: Schema.Attribute.Component<'fintech.faq-block-account', true>;
    heading: Schema.Attribute.Text;
    provider_heading: Schema.Attribute.String;
  };
}

export interface FintechContent extends Struct.ComponentSchema {
  collectionName: 'components_fintech_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'fintech.list-check', true>;
  };
}

export interface FintechCountrys extends Struct.ComponentSchema {
  collectionName: 'components_fintech_countrys';
  info: {
    displayName: 'countrys';
  };
  attributes: {
    currency: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
    providers: Schema.Attribute.Component<'fintech.providers', true>;
    providersLine: Schema.Attribute.Text;
    sections: Schema.Attribute.Component<'fintech.sections', true>;
    short: Schema.Attribute.String;
  };
}

export interface FintechCreditCard extends Struct.ComponentSchema {
  collectionName: 'components_fintech_credit_cards';
  info: {
    displayName: 'credit_card';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'files' | 'images'>;
    description: Schema.Attribute.Text;
    financial_card: Schema.Attribute.Component<'fintech.financial-card', true>;
    financial_heading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    list: Schema.Attribute.Component<'fintech.list-check', true>;
    partner_description: Schema.Attribute.Text;
    partner_heading: Schema.Attribute.Text;
    partner_image: Schema.Attribute.Media<'images' | 'files'>;
    work_description: Schema.Attribute.Text;
    works_card: Schema.Attribute.Component<'fintech.works-card', true>;
    works_heading: Schema.Attribute.String;
  };
}

export interface FintechDocuments extends Struct.ComponentSchema {
  collectionName: 'components_fintech_documents';
  info: {
    displayName: 'documents';
  };
  attributes: {
    document: Schema.Attribute.String;
  };
}

export interface FintechEducationLoan extends Struct.ComponentSchema {
  collectionName: 'components_fintech_education_loans';
  info: {
    displayName: 'education_loan';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.RichText;
    faq_detail: Schema.Attribute.Component<'fintech.faq-details', true>;
    faq_heading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'fintech.list-check', true>;
    sub_heading: Schema.Attribute.String;
    sub_topic: Schema.Attribute.Component<'fintech.sub-topics', true>;
  };
}

export interface FintechEligibility extends Struct.ComponentSchema {
  collectionName: 'components_fintech_eligibilities';
  info: {
    displayName: 'eligibility';
  };
  attributes: {
    criteria: Schema.Attribute.String;
    details: Schema.Attribute.Text;
  };
}

export interface FintechEligibleTable extends Struct.ComponentSchema {
  collectionName: 'components_fintech_eligible_tables';
  info: {
    displayName: 'eligible_table';
  };
  attributes: {
    criteria: Schema.Attribute.String;
    details: Schema.Attribute.Text;
  };
}

export interface FintechFaqBlockAccount extends Struct.ComponentSchema {
  collectionName: 'components_fintech_faq_block_accounts';
  info: {
    displayName: 'faq_block_account';
  };
  attributes: {
    content: Schema.Attribute.Component<'fintech.content', true>;
    title: Schema.Attribute.String;
  };
}

export interface FintechFaqDetails extends Struct.ComponentSchema {
  collectionName: 'components_fintech_faq_details';
  info: {
    displayName: 'faq_details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface FintechFeatures extends Struct.ComponentSchema {
  collectionName: 'components_fintech_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface FintechFinancialCard extends Struct.ComponentSchema {
  collectionName: 'components_fintech_financial_cards';
  info: {
    displayName: 'financial_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    points: Schema.Attribute.Component<'fintech.list-check', true>;
    shortContent: Schema.Attribute.Text;
    shortHead: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FintechFintechAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_fintech_fintech_about_uses';
  info: {
    displayName: 'fintech_About_us';
  };
  attributes: {};
}

export interface FintechForexCard extends Struct.ComponentSchema {
  collectionName: 'components_fintech_forex_cards';
  info: {
    displayName: 'forex_card';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    benefits_heading: Schema.Attribute.Text;
    benfits: Schema.Attribute.Component<'fintech.benefits', true>;
    card_management_heading: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'fintech.features', true>;
    Features_heading: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    management: Schema.Attribute.Component<'fintech.benefits', true>;
    partner_description: Schema.Attribute.Text;
    partner_heading: Schema.Attribute.String;
    partner_image: Schema.Attribute.Media<'images' | 'files'>;
    work_description: Schema.Attribute.Text;
    works: Schema.Attribute.Component<'fintech.work', true>;
    works_heading: Schema.Attribute.String;
  };
}

export interface FintechGic extends Struct.ComponentSchema {
  collectionName: 'components_fintech_gics';
  info: {
    displayName: 'GIC';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    Requirement_heading: Schema.Attribute.String;
    requirement_lists: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface FintechInsurance extends Struct.ComponentSchema {
  collectionName: 'components_fintech_insurances';
  info: {
    displayName: 'Insurance';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    countrys: Schema.Attribute.Component<'fintech.countrys', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface FintechListCheck extends Struct.ComponentSchema {
  collectionName: 'components_fintech_list_checks';
  info: {
    displayName: 'list_check';
  };
  attributes: {
    list: Schema.Attribute.String;
  };
}

export interface FintechLoanDisbursement extends Struct.ComponentSchema {
  collectionName: 'components_fintech_loan_disbursements';
  info: {
    displayName: 'loan_disbursement';
  };
  attributes: {
    scholarship: Schema.Attribute.Component<'fintech.scholarships', true>;
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FintechProviders extends Struct.ComponentSchema {
  collectionName: 'components_fintech_providers';
  info: {
    displayName: 'providers';
  };
  attributes: {
    name: Schema.Attribute.String;
    providerId: Schema.Attribute.String;
  };
}

export interface FintechRequirementList extends Struct.ComponentSchema {
  collectionName: 'components_fintech_requirement_lists';
  info: {
    displayName: 'Requirement_list';
  };
  attributes: {};
}

export interface FintechRows extends Struct.ComponentSchema {
  collectionName: 'components_fintech_rows';
  info: {
    displayName: 'rows';
  };
  attributes: {
    name: Schema.Attribute.String;
    values: Schema.Attribute.Component<'fintech.values', true>;
  };
}

export interface FintechSchemesLenders extends Struct.ComponentSchema {
  collectionName: 'components_fintech_schemes_lenders';
  info: {
    displayName: 'Schemes_Lenders';
  };
  attributes: {
    bank: Schema.Attribute.String;
    scheme: Schema.Attribute.Text;
    tenure: Schema.Attribute.String;
  };
}

export interface FintechScholarships extends Struct.ComponentSchema {
  collectionName: 'components_fintech_scholarships';
  info: {
    displayName: 'scholarships';
  };
  attributes: {
    amount: Schema.Attribute.String;
    country: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    student_name: Schema.Attribute.String;
  };
}

export interface FintechSections extends Struct.ComponentSchema {
  collectionName: 'components_fintech_sections';
  info: {
    displayName: 'sections';
  };
  attributes: {
    rows: Schema.Attribute.Component<'fintech.rows', true>;
    section: Schema.Attribute.String;
  };
}

export interface FintechSimCards extends Struct.ComponentSchema {
  collectionName: 'components_fintech_sim_cards';
  info: {
    displayName: 'SIM_cards';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    provider_list: Schema.Attribute.RichText;
    providers_description: Schema.Attribute.Text;
    providers_heading: Schema.Attribute.String;
  };
}

export interface FintechSubPara extends Struct.ComponentSchema {
  collectionName: 'components_fintech_sub_paras';
  info: {
    displayName: 'sub_para';
  };
  attributes: {
    paras: Schema.Attribute.Text;
  };
}

export interface FintechSubTopics extends Struct.ComponentSchema {
  collectionName: 'components_fintech_sub_topics';
  info: {
    displayName: 'sub_topics';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface FintechSubheadings extends Struct.ComponentSchema {
  collectionName: 'components_fintech_subheadings';
  info: {
    displayName: 'subheadings';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface FintechTopBank extends Struct.ComponentSchema {
  collectionName: 'components_fintech_top_banks';
  info: {
    displayName: 'top_bank';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    country: Schema.Attribute.String;
    list: Schema.Attribute.Component<'fintech.list-check', true>;
  };
}

export interface FintechTrustedBy extends Struct.ComponentSchema {
  collectionName: 'components_fintech_trusted_bies';
  info: {
    displayName: 'trustedBy';
  };
  attributes: {
    label: Schema.Attribute.String;
    labelCount: Schema.Attribute.String;
  };
}

export interface FintechValues extends Struct.ComponentSchema {
  collectionName: 'components_fintech_values';
  info: {
    displayName: 'values';
  };
  attributes: {
    providerId: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface FintechWhyLoan extends Struct.ComponentSchema {
  collectionName: 'components_fintech_why_loans';
  info: {
    displayName: 'why_loan';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image_background: Schema.Attribute.Media<'images' | 'files'>;
    list_text: Schema.Attribute.Component<'universities.text', true>;
    sub_title: Schema.Attribute.Text;
    success_number: Schema.Attribute.Component<
      'universities.why-studyin-cards',
      true
    >;
  };
}

export interface FintechWork extends Struct.ComponentSchema {
  collectionName: 'components_fintech_works';
  info: {
    displayName: 'work';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FintechWorksCard extends Struct.ComponentSchema {
  collectionName: 'components_fintech_works_cards';
  info: {
    displayName: 'works_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface GalleryGallery360 extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_360s';
  info: {
    displayName: 'gallery_360';
  };
  attributes: {
    subheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    view360url: Schema.Attribute.String;
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
    lists: Schema.Attribute.String;
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
      'admissions.about': AdmissionsAbout;
      'admissions.sliders': AdmissionsSliders;
      'blocks.about-count': BlocksAboutCount;
      'blocks.about-list': BlocksAboutList;
      'blocks.about-us': BlocksAboutUs;
      'blocks.company': BlocksCompany;
      'blocks.comprehensive': BlocksComprehensive;
      'blocks.fees': BlocksFees;
      'blocks.hostel-facility': BlocksHostelFacility;
      'blocks.services': BlocksServices;
      'blocks.study-destination': BlocksStudyDestination;
      'blocks.success-stories': BlocksSuccessStories;
      'blocks.years-format': BlocksYearsFormat;
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
      'fintech.aborad-education': FintechAboradEducation;
      'fintech.about-cards': FintechAboutCards;
      'fintech.about-fintech': FintechAboutFintech;
      'fintech.about-us': FintechAboutUs;
      'fintech.about-us-content': FintechAboutUsContent;
      'fintech.bank-account': FintechBankAccount;
      'fintech.banks': FintechBanks;
      'fintech.banks-images': FintechBanksImages;
      'fintech.benefits': FintechBenefits;
      'fintech.benfits': FintechBenfits;
      'fintech.blocked-account-providers': FintechBlockedAccountProviders;
      'fintech.blocked-accounts': FintechBlockedAccounts;
      'fintech.content': FintechContent;
      'fintech.countrys': FintechCountrys;
      'fintech.credit-card': FintechCreditCard;
      'fintech.documents': FintechDocuments;
      'fintech.education-loan': FintechEducationLoan;
      'fintech.eligibility': FintechEligibility;
      'fintech.eligible-table': FintechEligibleTable;
      'fintech.faq-block-account': FintechFaqBlockAccount;
      'fintech.faq-details': FintechFaqDetails;
      'fintech.features': FintechFeatures;
      'fintech.financial-card': FintechFinancialCard;
      'fintech.fintech-about-us': FintechFintechAboutUs;
      'fintech.forex-card': FintechForexCard;
      'fintech.gic': FintechGic;
      'fintech.insurance': FintechInsurance;
      'fintech.list-check': FintechListCheck;
      'fintech.loan-disbursement': FintechLoanDisbursement;
      'fintech.providers': FintechProviders;
      'fintech.requirement-list': FintechRequirementList;
      'fintech.rows': FintechRows;
      'fintech.schemes-lenders': FintechSchemesLenders;
      'fintech.scholarships': FintechScholarships;
      'fintech.sections': FintechSections;
      'fintech.sim-cards': FintechSimCards;
      'fintech.sub-para': FintechSubPara;
      'fintech.sub-topics': FintechSubTopics;
      'fintech.subheadings': FintechSubheadings;
      'fintech.top-bank': FintechTopBank;
      'fintech.trusted-by': FintechTrustedBy;
      'fintech.values': FintechValues;
      'fintech.why-loan': FintechWhyLoan;
      'fintech.work': FintechWork;
      'fintech.works-card': FintechWorksCard;
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
