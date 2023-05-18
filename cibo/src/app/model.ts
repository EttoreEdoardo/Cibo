export interface Root {
    count: number
    page: string
    page_count: number
    page_size: number
    products: Product[]
    skip: number
  }
  
  export interface Product {
    _id: string
    _keywords: string[]
    added_countries_tags: any[]
    additives_debug_tags: string[]
    additives_n: number
    additives_old_n: number
    additives_old_tags: string[]
    additives_original_tags: string[]
    additives_prev_original_tags: string[]
    additives_tags: string[]
    allergens: string
    allergens_from_ingredients: string
    allergens_from_user: string
    allergens_hierarchy: string[]
    allergens_lc: string
    allergens_tags: string[]
    amino_acids_prev_tags: any[]
    amino_acids_tags: any[]
    brands: string
    brands_tags: string[]
    carbon_footprint_from_known_ingredients_debug: string
    carbon_footprint_percent_of_known_ingredients: number
    categories: string
    categories_hierarchy: string[]
    categories_lc: string
    categories_old: string
    categories_properties: CategoriesProperties
    categories_properties_tags: string[]
    categories_tags: string[]
    category_properties: CategoryProperties
    checked: string
    checkers_tags: string[]
    ciqual_food_name_tags: string[]
    cities_tags: any[]
    code: string
    codes_tags: string[]
    compared_to_category: string
    complete: number
    completeness: string
    correctors_tags: string[]
    countries: string
    countries_beforescanbot: string
    countries_hierarchy: string[]
    countries_lc: string
    countries_tags: string[]
    created_t: number
    creator: string
    data_quality_bugs_tags: any[]
    data_quality_errors_tags: any[]
    data_quality_info_tags: string[]
    data_quality_tags: string[]
    data_quality_warnings_tags: string[]
    data_sources: string
    data_sources_tags: string[]
    debug_param_sorted_langs: string[]
    debug_tags?: string[]
    ecoscore_data: EcoscoreData
    ecoscore_extended_data: EcoscoreExtendedData
    ecoscore_extended_data_version: string
    ecoscore_grade: string
    ecoscore_score: number
    ecoscore_tags: string[]
    editors: string[]
    editors_tags: string[]
    emb_codes: string
    emb_codes_20141016: string
    emb_codes_orig: string
    emb_codes_tags: any[]
    entry_dates_tags: string[]
    environment_impact_level: string
    environment_impact_level_tags: any[]
    expiration_date: string
    food_groups: string
    food_groups_tags: string[]
    "fruits-vegetables-nuts_100g_estimate": number
    generic_name: string
    generic_name_en: string
    generic_name_fr: string
    grades: Grades2
    id: string
    image_front_small_url: string
    image_front_thumb_url: string
    image_front_url: string
    image_ingredients_small_url: string
    image_ingredients_thumb_url: string
    image_ingredients_url: string
    image_nutrition_small_url?: string
    image_nutrition_thumb_url?: string
    image_nutrition_url?: string
    image_small_url: string
    image_thumb_url: string
    image_url: string
    images: Images
    informers_tags: string[]
    ingredients: Ingredient[]
    ingredients_analysis: IngredientsAnalysis
    ingredients_analysis_tags: string[]
    ingredients_debug: string | undefined[]
    ingredients_from_or_that_may_be_from_palm_oil_n: number
    ingredients_from_palm_oil_n: number
    ingredients_from_palm_oil_tags: any[]
    ingredients_hierarchy: string[]
    ingredients_ids_debug: string[]
    ingredients_n: number
    ingredients_n_tags: string[]
    ingredients_original_tags: string[]
    ingredients_percent_analysis: number
    ingredients_tags: string[]
    ingredients_text: string
    ingredients_text_debug: string
    ingredients_text_en: string
    ingredients_text_fr: string
    ingredients_text_with_allergens: string
    ingredients_text_with_allergens_en: string
    ingredients_text_with_allergens_fr: string
    ingredients_that_may_be_from_palm_oil_n: number
    ingredients_that_may_be_from_palm_oil_tags: any[]
    ingredients_with_specified_percent_n: number
    ingredients_with_specified_percent_sum: number
    ingredients_with_unspecified_percent_n: number
    ingredients_with_unspecified_percent_sum: any
    interface_version_created: string
    interface_version_modified: string
    known_ingredients_n: number
    labels: string
    labels_hierarchy: string[]
    labels_lc: string
    labels_old: string
    labels_tags: string[]
    lang: string
    languages: Languages
    languages_codes: LanguagesCodes
    languages_hierarchy: string[]
    languages_tags: string[]
    last_check_dates_tags: string[]
    last_checked_t: number
    last_checker: string
    last_edit_dates_tags: string[]
    last_editor: string
    last_image_dates_tags: string[]
    last_image_t: number
    last_modified_by: string
    last_modified_t: number
    lc: string
    link: string
    main_countries_tags: any[]
    manufacturing_places: string
    manufacturing_places_tags: any[]
    max_imgid: string
    minerals_prev_tags: any[]
    minerals_tags: any[]
    misc_tags: string[]
    new_additives_n: number
    no_nutrition_data: string
    nova_group: number
    nova_group_debug: string
    nova_groups: string
    nova_groups_markers: NovaGroupsMarkers
    nova_groups_tags: string[]
    nucleotides_prev_tags: any[]
    nucleotides_tags: any[]
    nutrient_levels: NutrientLevels
    nutrient_levels_tags: string[]
    nutriments: Nutriments
    nutriscore_data: NutriscoreData
    nutriscore_grade: string
    nutriscore_score: number
    nutriscore_score_opposite: number
    nutrition_data: string
    nutrition_data_per: string
    nutrition_data_prepared: string
    nutrition_data_prepared_per: string
    nutrition_grade_fr: string
    nutrition_grades: string
    nutrition_grades_tags: string[]
    nutrition_score_beverage: number
    nutrition_score_debug: string
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number
    obsolete: string
    obsolete_since_date: string
    origin_en: string
    origin_fr: string
    origins: string
    origins_hierarchy: any[]
    origins_lc: string
    origins_old: string
    origins_tags: any[]
    other_nutritional_substances_tags: any[]
    packaging: string
    packaging_hierarchy: string[]
    packaging_lc: string
    packaging_materials_tags: string[]
    packaging_old: string
    packaging_old_before_taxonomization: string
    packaging_recycling_tags: any[]
    packaging_shapes_tags: string[]
    packaging_tags: string[]
    packaging_text_en: string
    packaging_text_fr: string
    packagings: Packaging3[]
    photographers_tags: string[]
    pnns_groups_1: string
    pnns_groups_1_tags: string[]
    pnns_groups_2: string
    pnns_groups_2_tags: string[]
    popularity_key: string
    popularity_tags: string[]
    product_name: string
    product_name_en: string
    product_name_fr: string
    product_quantity: any
    purchase_places: string
    purchase_places_tags: string[]
    quantity: string
    removed_countries_tags: any[]
    rev: number
    scans_n: number
    scores: Scores2
    selected_images: SelectedImages
    serving_quantity?: string
    serving_size: string
    sortkey: number
    sources: Source[]
    states: string
    states_hierarchy: string[]
    states_tags: string[]
    stores: string
    stores_tags: string[]
    teams: string
    teams_tags: string[]
    traces: string
    traces_from_ingredients: string
    traces_from_user: string
    traces_hierarchy: string[]
    traces_lc: string
    traces_tags: string[]
    unique_scans_n: number
    unknown_ingredients_n: number
    unknown_nutrients_tags: any[]
    update_key: string
    url: string
    vitamins_prev_tags: any[]
    vitamins_tags: any[]
    generic_name_da?: string
    generic_name_de?: string
    generic_name_el?: string
    generic_name_es?: string
    generic_name_fi?: string
    generic_name_it?: string
    generic_name_nl?: string
    generic_name_no?: string
    generic_name_pt?: string
    generic_name_sv?: string
    ingredients_text_da?: string
    ingredients_text_de?: string
    ingredients_text_el?: string
    ingredients_text_es?: string
    ingredients_text_fi?: string
    ingredients_text_it?: string
    ingredients_text_nb?: string
    ingredients_text_nl?: string
    ingredients_text_no?: string
    ingredients_text_pt?: string
    ingredients_text_sv?: string
    ingredients_text_with_allergens_da?: string
    ingredients_text_with_allergens_de?: string
    ingredients_text_with_allergens_el?: string
    ingredients_text_with_allergens_es?: string
    ingredients_text_with_allergens_fi?: string
    ingredients_text_with_allergens_nb?: string
    ingredients_text_with_allergens_nl?: string
    ingredients_text_with_allergens_no?: string
    ingredients_text_with_allergens_pt?: string
    ingredients_text_with_allergens_sv?: string
    origin_da?: string
    origin_de?: string
    origin_el?: string
    origin_es?: string
    origin_fi?: string
    origin_nl?: string
    origin_no?: string
    origin_pt?: string
    origin_sv?: string
    packaging_text_da?: string
    packaging_text_de?: string
    packaging_text_el?: string
    packaging_text_es?: string
    packaging_text_fi?: string
    packaging_text_nl?: string
    packaging_text_no?: string
    packaging_text_pt?: string
    packaging_text_sv?: string
    packagings_complete?: number
    product_name_da?: string
    product_name_de?: string
    product_name_el?: string
    product_name_es?: string
    product_name_fi?: string
    product_name_it?: string
    product_name_nl?: string
    product_name_no?: string
    product_name_pt?: string
    product_name_sv?: string
    weighers_tags?: any[]
  }
  
  export interface CategoriesProperties {
    "agribalyse_food_code:en": string
    "ciqual_food_code:en": string
  }
  
  export interface CategoryProperties {
    "ciqual_food_name:en"?: string
    "ciqual_food_name:fr"?: string
  }
  
  export interface EcoscoreData {
    adjustments: Adjustments
    agribalyse: Agribalyse
    grade: string
    grades: Grades
    missing: Missing
    missing_data_warning: number
    previous_data: PreviousData
    score: number
    scores: Scores
    status: string
  }
  
  export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients
    packaging: Packaging
    production_system: ProductionSystem
    threatened_species: ThreatenedSpecies
  }
  
  export interface OriginsOfIngredients {
    aggregated_origins: AggregatedOrigin[]
    epi_score: number
    epi_value: number
    origins_from_origins_field: string[]
    transportation_score: number
    transportation_scores: TransportationScores
    transportation_value: number
    transportation_values: TransportationValues
    value: number
    values: Values
    warning: string
  }
  
  export interface AggregatedOrigin {
    epi_score: string
    origin: string
    percent: number
    transportation_score: any
  }
  
  export interface TransportationScores {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface TransportationValues {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Values {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface Packaging {
    non_recyclable_and_non_biodegradable_materials: number
    packagings: Packaging2[]
    score: number
    value: number
    warning?: string
  }
  
  export interface Packaging2 {
    ecoscore_material_score: number
    ecoscore_shape_ratio: any
    material: string
    shape: string
    non_recyclable_and_non_biodegradable?: string
  }
  
  export interface ProductionSystem {
    labels: any[]
    value: number
    warning: string
  }
  
  export interface ThreatenedSpecies {}
  
  export interface Agribalyse {
    agribalyse_food_code: string
    co2_agriculture: string
    co2_consumption: string
    co2_distribution: string
    co2_packaging: string
    co2_processing: string
    co2_total: string
    co2_transportation: string
    code: string
    dqr: string
    ef_agriculture: string
    ef_consumption: string
    ef_distribution: string
    ef_packaging: string
    ef_processing: string
    ef_total: string
    ef_transportation: string
    is_beverage: number
    name_en: string
    name_fr: string
    score: number
    version: string
  }
  
  export interface Grades {
    ad: string
    al: string
    at: string
    ax: string
    ba: string
    be: string
    bg: string
    ch: string
    cy: string
    cz: string
    de: string
    dk: string
    dz: string
    ee: string
    eg: string
    es: string
    fi: string
    fo: string
    fr: string
    gg: string
    gi: string
    gr: string
    hr: string
    hu: string
    ie: string
    il: string
    im: string
    is: string
    it: string
    je: string
    lb: string
    li: string
    lt: string
    lu: string
    lv: string
    ly: string
    ma: string
    mc: string
    md: string
    me: string
    mk: string
    mt: string
    nl: string
    no: string
    pl: string
    ps: string
    pt: string
    ro: string
    rs: string
    se: string
    si: string
    sj: string
    sk: string
    sm: string
    sy: string
    tn: string
    tr: string
    ua: string
    uk: string
    us: string
    va: string
    world: string
    xk: string
  }
  
  export interface Missing {
    labels: number
    origins: number
    packagings?: number
  }
  
  export interface PreviousData {
    agribalyse: Agribalyse2
    grade: string
    score: number
  }
  
  export interface Agribalyse2 {
    agribalyse_food_code: string
    co2_agriculture: string
    co2_consumption: string
    co2_distribution: string
    co2_packaging: string
    co2_processing: string
    co2_total: string
    co2_transportation: string
    code: string
    dqr: string
    ef_agriculture: string
    ef_consumption: string
    ef_distribution: string
    ef_packaging: string
    ef_processing: string
    ef_total: string
    ef_transportation: string
    is_beverage: number
    name_en: string
    name_fr: string
    score: number
  }
  
  export interface Scores {
    ad: number
    al: number
    at: number
    ax: number
    ba: number
    be: number
    bg: number
    ch: number
    cy: number
    cz: number
    de: number
    dk: number
    dz: number
    ee: number
    eg: number
    es: number
    fi: number
    fo: number
    fr: number
    gg: number
    gi: number
    gr: number
    hr: number
    hu: number
    ie: number
    il: number
    im: number
    is: number
    it: number
    je: number
    lb: number
    li: number
    lt: number
    lu: number
    lv: number
    ly: number
    ma: number
    mc: number
    md: number
    me: number
    mk: number
    mt: number
    nl: number
    no: number
    pl: number
    ps: number
    pt: number
    ro: number
    rs: number
    se: number
    si: number
    sj: number
    sk: number
    sm: number
    sy: number
    tn: number
    tr: number
    ua: number
    uk: number
    us: number
    va: number
    world: number
    xk: number
  }
  
  export interface EcoscoreExtendedData {
    impact: Impact
  }
  
  export interface Impact {
    ef_single_score_log_stddev: string
    likeliest_impacts: LikeliestImpacts
    likeliest_recipe: LikeliestRecipe
    mass_ratio_uncharacterized: string
    uncharacterized_ingredients: UncharacterizedIngredients
    uncharacterized_ingredients_mass_proportion: UncharacterizedIngredientsMassProportion
    uncharacterized_ingredients_ratio: UncharacterizedIngredientsRatio
    warnings: string[]
  }
  
  export interface LikeliestImpacts {
    Climate_change: string
    EF_single_score: string
  }
  
  export interface LikeliestRecipe {
    "en:baker_s_yeast": string
    "en:corn_starch"?: string
    "en:crushed_tomato"?: string
    "en:dextrose"?: string
    "en:e250"?: string
    "en:e316"?: number
    "en:e451"?: string
    "en:ferment"?: string
    "en:gelling_agent"?: string
    "en:glucose_syrup"?: string
    "en:ham"?: string
    "en:herb"?: number
    "en:lactose"?: string
    "en:malted_wheat_flour"?: string
    "en:natural_flavouring"?: number
    "en:rocket"?: string
    "en:salt": string
    "en:water": string
    "en:wheat_flour": string
    "fr:fond_de_porc"?: number
    "fr:mozzarella"?: string
    "en:bell_pepper"?: string
    "en:cherry_tomato"?: string
    "en:chili_pepper"?: string
    "en:e300"?: string
    "en:e330"?: string
    "en:edam"?: string
    "en:garlic"?: string
    "en:lemon_juice"?: string
    "en:mozzarella"?: string
    "en:olives"?: string
    "en:onion"?: string
    "en:oregano"?: string
    "en:paprika"?: string
    "en:parsley"?: string
    "en:pepper"?: string
    "en:rapeseed_oil"?: string
    "en:sour_cream"?: string
    "en:spice_extract"?: string
    "en:sugar"?: string
    "en:tomato_concentrate"?: string
    "en:tomato_puree"?: string
    "en:white_vinegar"?: string
  }
  
  export interface UncharacterizedIngredients {
    impact: string[]
    nutrition: string[]
  }
  
  export interface UncharacterizedIngredientsMassProportion {
    impact: string
    nutrition: string
  }
  
  export interface UncharacterizedIngredientsRatio {
    impact: string
    nutrition: string
  }
  
  export interface Grades2 {}
  
  export interface Images {
    "1": N1
    "10": N10
    "11": N11
    "12": N12
    "13": N13
    "14": N14
    "15": N15
    "16": N16
    "17": N17
    "18": N18
    "19": N19
    "2": N2
    "20": N20
    "21": N21
    "22": N22
    "23": N23
    "24": N24
    "25": N25
    "26": N26
    "27": N27
    "28": N28
    "3": N3
    "30": N30
    "31": N31
    "32": N32
    "4": N4
    "5": N5
    "6": N6
    "7": N7
    "8": N8
    "9": N9
    front: Front
    front_en: FrontEn
    front_fr: FrontFr
    ingredients?: Ingredients
    ingredients_fr: IngredientsFr
    nutrition?: Nutrition
    nutrition_fr: NutritionFr
    "29"?: N29
    "33"?: N33
    "34"?: N34
    "35"?: N35
    "36"?: N36
    "37"?: N37
    "38"?: N38
    "39"?: N39
    "40"?: N40
    "41"?: N41
    "42"?: N42
    "43"?: N43
    "44"?: N44
    "45"?: N45
    "46"?: N46
    "47"?: N47
    "48"?: N48
    "49"?: N49
    "50"?: N50
    "51"?: N51
    "52"?: N52
    "53"?: N53
    "54"?: N54
    front_es?: FrontEs
    ingredients_da?: IngredientsDa
    ingredients_de?: IngredientsDe
    ingredients_el?: IngredientsEl
    ingredients_en?: IngredientsEn
    ingredients_es?: IngredientsEs
    ingredients_fi?: IngredientsFi
    ingredients_nl?: IngredientsNl
    ingredients_no?: IngredientsNo
    ingredients_pt?: IngredientsPt
    ingredients_sv?: IngredientsSv
    packaging_de?: PackagingDe
    packaging_fr?: PackagingFr
  }
  
  export interface N1 {
    sizes: Sizes
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes {
    "100": N100
    "400": N400
    full: Full
  }
  
  export interface N100 {
    h: number
    w: number
  }
  
  export interface N400 {
    h: number
    w: number
  }
  
  export interface Full {
    h: number
    w: number
  }
  
  export interface N10 {
    sizes: Sizes2
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes2 {
    "100": N1002
    "400": N4002
    full: Full2
  }
  
  export interface N1002 {
    h: number
    w: number
  }
  
  export interface N4002 {
    h: number
    w: number
  }
  
  export interface Full2 {
    h: number
    w: number
  }
  
  export interface N11 {
    sizes: Sizes3
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes3 {
    "100": N1003
    "400": N4003
    full: Full3
  }
  
  export interface N1003 {
    h: number
    w: number
  }
  
  export interface N4003 {
    h: number
    w: number
  }
  
  export interface Full3 {
    h: number
    w: number
  }
  
  export interface N12 {
    sizes: Sizes4
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes4 {
    "100": N1004
    "400": N4004
    full: Full4
  }
  
  export interface N1004 {
    h: number
    w: number
  }
  
  export interface N4004 {
    h: number
    w: number
  }
  
  export interface Full4 {
    h: number
    w: number
  }
  
  export interface N13 {
    sizes: Sizes5
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes5 {
    "100": N1005
    "400": N4005
    full: Full5
  }
  
  export interface N1005 {
    h: number
    w: number
  }
  
  export interface N4005 {
    h: number
    w: number
  }
  
  export interface Full5 {
    h: number
    w: number
  }
  
  export interface N14 {
    sizes: Sizes6
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes6 {
    "100": N1006
    "400": N4006
    full: Full6
  }
  
  export interface N1006 {
    h: number
    w: number
  }
  
  export interface N4006 {
    h: number
    w: number
  }
  
  export interface Full6 {
    h: number
    w: number
  }
  
  export interface N15 {
    sizes: Sizes7
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes7 {
    "100": N1007
    "400": N4007
    full: Full7
  }
  
  export interface N1007 {
    h: number
    w: number
  }
  
  export interface N4007 {
    h: number
    w: number
  }
  
  export interface Full7 {
    h: number
    w: number
  }
  
  export interface N16 {
    sizes: Sizes8
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes8 {
    "100": N1008
    "400": N4008
    full: Full8
  }
  
  export interface N1008 {
    h: number
    w: number
  }
  
  export interface N4008 {
    h: number
    w: number
  }
  
  export interface Full8 {
    h: number
    w: number
  }
  
  export interface N17 {
    sizes: Sizes9
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes9 {
    "100": N1009
    "400": N4009
    full: Full9
  }
  
  export interface N1009 {
    h: number
    w: number
  }
  
  export interface N4009 {
    h: number
    w: number
  }
  
  export interface Full9 {
    h: number
    w: number
  }
  
  export interface N18 {
    sizes: Sizes10
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes10 {
    "100": N10010
    "400": N40010
    full: Full10
  }
  
  export interface N10010 {
    h: number
    w: number
  }
  
  export interface N40010 {
    h: number
    w: number
  }
  
  export interface Full10 {
    h: number
    w: number
  }
  
  export interface N19 {
    sizes: Sizes11
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes11 {
    "100": N10011
    "400": N40011
    full: Full11
  }
  
  export interface N10011 {
    h: number
    w: number
  }
  
  export interface N40011 {
    h: number
    w: number
  }
  
  export interface Full11 {
    h: number
    w: number
  }
  
  export interface N2 {
    sizes: Sizes12
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes12 {
    "100": N10012
    "400": N40012
    full: Full12
  }
  
  export interface N10012 {
    h: number
    w: number
  }
  
  export interface N40012 {
    h: number
    w: number
  }
  
  export interface Full12 {
    h: number
    w: number
  }
  
  export interface N20 {
    sizes: Sizes13
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes13 {
    "100": N10013
    "400": N40013
    full: Full13
  }
  
  export interface N10013 {
    h: number
    w: number
  }
  
  export interface N40013 {
    h: number
    w: number
  }
  
  export interface Full13 {
    h: number
    w: number
  }
  
  export interface N21 {
    sizes: Sizes14
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes14 {
    "100": N10014
    "400": N40014
    full: Full14
  }
  
  export interface N10014 {
    h: number
    w: number
  }
  
  export interface N40014 {
    h: number
    w: number
  }
  
  export interface Full14 {
    h: number
    w: number
  }
  
  export interface N22 {
    sizes: Sizes15
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes15 {
    "100": N10015
    "400": N40015
    full: Full15
  }
  
  export interface N10015 {
    h: number
    w: number
  }
  
  export interface N40015 {
    h: number
    w: number
  }
  
  export interface Full15 {
    h: number
    w: number
  }
  
  export interface N23 {
    sizes: Sizes16
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes16 {
    "100": N10016
    "400": N40016
    full: Full16
  }
  
  export interface N10016 {
    h: number
    w: number
  }
  
  export interface N40016 {
    h: number
    w: number
  }
  
  export interface Full16 {
    h: number
    w: number
  }
  
  export interface N24 {
    sizes: Sizes17
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes17 {
    "100": N10017
    "400": N40017
    full: Full17
  }
  
  export interface N10017 {
    h: number
    w: number
  }
  
  export interface N40017 {
    h: number
    w: number
  }
  
  export interface Full17 {
    h: number
    w: number
  }
  
  export interface N25 {
    sizes: Sizes18
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes18 {
    "100": N10018
    "400": N40018
    full: Full18
  }
  
  export interface N10018 {
    h: number
    w: number
  }
  
  export interface N40018 {
    h: number
    w: number
  }
  
  export interface Full18 {
    h: number
    w: number
  }
  
  export interface N26 {
    sizes: Sizes19
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes19 {
    "100": N10019
    "400": N40019
    full: Full19
  }
  
  export interface N10019 {
    h: number
    w: number
  }
  
  export interface N40019 {
    h: number
    w: number
  }
  
  export interface Full19 {
    h: number
    w: number
  }
  
  export interface N27 {
    sizes: Sizes20
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes20 {
    "100": N10020
    "400": N40020
    full: Full20
  }
  
  export interface N10020 {
    h: number
    w: number
  }
  
  export interface N40020 {
    h: number
    w: number
  }
  
  export interface Full20 {
    h: number
    w: number
  }
  
  export interface N28 {
    sizes: Sizes21
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes21 {
    "100": N10021
    "400": N40021
    full: Full21
  }
  
  export interface N10021 {
    h: number
    w: number
  }
  
  export interface N40021 {
    h: number
    w: number
  }
  
  export interface Full21 {
    h: number
    w: number
  }
  
  export interface N3 {
    sizes: Sizes22
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes22 {
    "100": N10022
    "400": N40022
    full: Full22
  }
  
  export interface N10022 {
    h: number
    w: number
  }
  
  export interface N40022 {
    h: number
    w: number
  }
  
  export interface Full22 {
    h: number
    w: number
  }
  
  export interface N30 {
    sizes: Sizes23
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes23 {
    "100": N10023
    "400": N40023
    full: Full23
  }
  
  export interface N10023 {
    h: number
    w: number
  }
  
  export interface N40023 {
    h: number
    w: number
  }
  
  export interface Full23 {
    h: number
    w: number
  }
  
  export interface N31 {
    sizes: Sizes24
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes24 {
    "100": N10024
    "400": N40024
    full: Full24
  }
  
  export interface N10024 {
    h: number
    w: number
  }
  
  export interface N40024 {
    h: number
    w: number
  }
  
  export interface Full24 {
    h: number
    w: number
  }
  
  export interface N32 {
    sizes: Sizes25
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes25 {
    "100": N10025
    "400": N40025
    full: Full25
  }
  
  export interface N10025 {
    h: number
    w: number
  }
  
  export interface N40025 {
    h: number
    w: number
  }
  
  export interface Full25 {
    h: number
    w: number
  }
  
  export interface N4 {
    sizes: Sizes26
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes26 {
    "100": N10026
    "400": N40026
    full: Full26
  }
  
  export interface N10026 {
    h: number
    w: number
  }
  
  export interface N40026 {
    h: number
    w: number
  }
  
  export interface Full26 {
    h: number
    w: number
  }
  
  export interface N5 {
    sizes: Sizes27
    uploaded_t: string
    uploader: string
  }
  
  export interface Sizes27 {
    "100": N10027
    "400": N40027
    full: Full27
  }
  
  export interface N10027 {
    h: number
    w: number
  }
  
  export interface N40027 {
    h: number
    w: number
  }
  
  export interface Full27 {
    h: number
    w: number
  }
  
  export interface N6 {
    sizes: Sizes28
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes28 {
    "100": N10028
    "400": N40028
    full: Full28
  }
  
  export interface N10028 {
    h: number
    w: number
  }
  
  export interface N40028 {
    h: number
    w: number
  }
  
  export interface Full28 {
    h: number
    w: number
  }
  
  export interface N7 {
    sizes: Sizes29
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes29 {
    "100": N10029
    "400": N40029
    full: Full29
  }
  
  export interface N10029 {
    h: number
    w: number
  }
  
  export interface N40029 {
    h: number
    w: number
  }
  
  export interface Full29 {
    h: number
    w: number
  }
  
  export interface N8 {
    sizes: Sizes30
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes30 {
    "100": N10030
    "400": N40030
    full: Full30
  }
  
  export interface N10030 {
    h: number
    w: number
  }
  
  export interface N40030 {
    h: number
    w: number
  }
  
  export interface Full30 {
    h: number
    w: number
  }
  
  export interface N9 {
    sizes: Sizes31
    uploaded_t: any
    uploader: string
  }
  
  export interface Sizes31 {
    "100": N10031
    "400": N40031
    full: Full31
  }
  
  export interface N10031 {
    h: number
    w: number
  }
  
  export interface N40031 {
    h: number
    w: number
  }
  
  export interface Full31 {
    h: number
    w: number
  }
  
  export interface Front {
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes32
    white_magic: any
  }
  
  export interface Sizes32 {
    "100": N10032
    "200": N200
    "400": N40032
    full: Full32
  }
  
  export interface N10032 {
    h: number
    w: number
  }
  
  export interface N200 {
    h: number
    w: number
  }
  
  export interface N40032 {
    h: number
    w: number
  }
  
  export interface Full32 {
    h: number
    w: number
  }
  
  export interface FrontEn {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes33
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes33 {
    "100": N10033
    "200": N2002
    "400": N40033
    full: Full33
  }
  
  export interface N10033 {
    h: number
    w: number
  }
  
  export interface N2002 {
    h: number
    w: number
  }
  
  export interface N40033 {
    h: number
    w: number
  }
  
  export interface Full33 {
    h: number
    w: number
  }
  
  export interface FrontFr {
    angle: any
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize?: string
    rev: string
    sizes: Sizes34
    white_magic?: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes34 {
    "100": N10034
    "200": N2003
    "400": N40034
    full: Full34
  }
  
  export interface N10034 {
    h: number
    w: number
  }
  
  export interface N2003 {
    h: number
    w: number
  }
  
  export interface N40034 {
    h: number
    w: number
  }
  
  export interface Full34 {
    h: number
    w: number
  }
  
  export interface Ingredients {
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes35
    white_magic: string
  }
  
  export interface Sizes35 {
    "100": N10035
    "200": N2004
    "400": N40035
    full: Full35
  }
  
  export interface N10035 {
    h: number
    w: number
  }
  
  export interface N2004 {
    h: number
    w: number
  }
  
  export interface N40035 {
    h: number
    w: number
  }
  
  export interface Full35 {
    h: number
    w: number
  }
  
  export interface IngredientsFr {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    ocr?: number
    orientation?: string
    rev: string
    sizes: Sizes36
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
    coordinates_image_size?: string
  }
  
  export interface Sizes36 {
    "100": N10036
    "200": N2005
    "400": N40036
    full: Full36
  }
  
  export interface N10036 {
    h: number
    w: number
  }
  
  export interface N2005 {
    h: number
    w: number
  }
  
  export interface N40036 {
    h: number
    w: number
  }
  
  export interface Full36 {
    h: number
    w: number
  }
  
  export interface Nutrition {
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes37
    white_magic: string
  }
  
  export interface Sizes37 {
    "100": N10037
    "200": N2006
    "400": N40037
    full: Full37
  }
  
  export interface N10037 {
    h: number
    w: number
  }
  
  export interface N2006 {
    h: number
    w: number
  }
  
  export interface N40037 {
    h: number
    w: number
  }
  
  export interface Full37 {
    h: number
    w: number
  }
  
  export interface NutritionFr {
    angle: string
    geometry: string
    imgid: string
    normalize: string
    ocr?: number
    orientation?: string
    rev: string
    sizes: Sizes38
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
    coordinates_image_size?: string
  }
  
  export interface Sizes38 {
    "100": N10038
    "200": N2007
    "400": N40038
    full: Full38
  }
  
  export interface N10038 {
    h: number
    w: number
  }
  
  export interface N2007 {
    h: number
    w: number
  }
  
  export interface N40038 {
    h: number
    w: number
  }
  
  export interface Full38 {
    h: number
    w: number
  }
  
  export interface N29 {
    sizes: Sizes39
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes39 {
    "100": N10039
    "400": N40039
    full: Full39
  }
  
  export interface N10039 {
    h: number
    w: number
  }
  
  export interface N40039 {
    h: number
    w: number
  }
  
  export interface Full39 {
    h: number
    w: number
  }
  
  export interface N33 {
    sizes: Sizes40
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes40 {
    "100": N10040
    "400": N40040
    full: Full40
  }
  
  export interface N10040 {
    h: number
    w: number
  }
  
  export interface N40040 {
    h: number
    w: number
  }
  
  export interface Full40 {
    h: number
    w: number
  }
  
  export interface N34 {
    sizes: Sizes41
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes41 {
    "100": N10041
    "400": N40041
    full: Full41
  }
  
  export interface N10041 {
    h: number
    w: number
  }
  
  export interface N40041 {
    h: number
    w: number
  }
  
  export interface Full41 {
    h: number
    w: number
  }
  
  export interface N35 {
    sizes: Sizes42
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes42 {
    "100": N10042
    "400": N40042
    full: Full42
  }
  
  export interface N10042 {
    h: number
    w: number
  }
  
  export interface N40042 {
    h: number
    w: number
  }
  
  export interface Full42 {
    h: number
    w: number
  }
  
  export interface N36 {
    sizes: Sizes43
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes43 {
    "100": N10043
    "400": N40043
    full: Full43
  }
  
  export interface N10043 {
    h: number
    w: number
  }
  
  export interface N40043 {
    h: number
    w: number
  }
  
  export interface Full43 {
    h: number
    w: number
  }
  
  export interface N37 {
    sizes: Sizes44
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes44 {
    "100": N10044
    "400": N40044
    full: Full44
  }
  
  export interface N10044 {
    h: number
    w: number
  }
  
  export interface N40044 {
    h: number
    w: number
  }
  
  export interface Full44 {
    h: number
    w: number
  }
  
  export interface N38 {
    sizes: Sizes45
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes45 {
    "100": N10045
    "400": N40045
    full: Full45
  }
  
  export interface N10045 {
    h: number
    w: number
  }
  
  export interface N40045 {
    h: number
    w: number
  }
  
  export interface Full45 {
    h: number
    w: number
  }
  
  export interface N39 {
    sizes: Sizes46
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes46 {
    "100": N10046
    "400": N40046
    full: Full46
  }
  
  export interface N10046 {
    h: number
    w: number
  }
  
  export interface N40046 {
    h: number
    w: number
  }
  
  export interface Full46 {
    h: number
    w: number
  }
  
  export interface N40 {
    sizes: Sizes47
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes47 {
    "100": N10047
    "400": N40047
    full: Full47
  }
  
  export interface N10047 {
    h: number
    w: number
  }
  
  export interface N40047 {
    h: number
    w: number
  }
  
  export interface Full47 {
    h: number
    w: number
  }
  
  export interface N41 {
    sizes: Sizes48
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes48 {
    "100": N10048
    "400": N40048
    full: Full48
  }
  
  export interface N10048 {
    h: number
    w: number
  }
  
  export interface N40048 {
    h: number
    w: number
  }
  
  export interface Full48 {
    h: number
    w: number
  }
  
  export interface N42 {
    sizes: Sizes49
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes49 {
    "100": N10049
    "400": N40049
    full: Full49
  }
  
  export interface N10049 {
    h: number
    w: number
  }
  
  export interface N40049 {
    h: number
    w: number
  }
  
  export interface Full49 {
    h: number
    w: number
  }
  
  export interface N43 {
    sizes: Sizes50
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes50 {
    "100": N10050
    "400": N40050
    full: Full50
  }
  
  export interface N10050 {
    h: number
    w: number
  }
  
  export interface N40050 {
    h: number
    w: number
  }
  
  export interface Full50 {
    h: number
    w: number
  }
  
  export interface N44 {
    sizes: Sizes51
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes51 {
    "100": N10051
    "400": N40051
    full: Full51
  }
  
  export interface N10051 {
    h: number
    w: number
  }
  
  export interface N40051 {
    h: number
    w: number
  }
  
  export interface Full51 {
    h: number
    w: number
  }
  
  export interface N45 {
    sizes: Sizes52
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes52 {
    "100": N10052
    "400": N40052
    full: Full52
  }
  
  export interface N10052 {
    h: number
    w: number
  }
  
  export interface N40052 {
    h: number
    w: number
  }
  
  export interface Full52 {
    h: number
    w: number
  }
  
  export interface N46 {
    sizes: Sizes53
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes53 {
    "100": N10053
    "400": N40053
    full: Full53
  }
  
  export interface N10053 {
    h: number
    w: number
  }
  
  export interface N40053 {
    h: number
    w: number
  }
  
  export interface Full53 {
    h: number
    w: number
  }
  
  export interface N47 {
    sizes: Sizes54
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes54 {
    "100": N10054
    "400": N40054
    full: Full54
  }
  
  export interface N10054 {
    h: number
    w: number
  }
  
  export interface N40054 {
    h: number
    w: number
  }
  
  export interface Full54 {
    h: number
    w: number
  }
  
  export interface N48 {
    sizes: Sizes55
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes55 {
    "100": N10055
    "400": N40055
    full: Full55
  }
  
  export interface N10055 {
    h: number
    w: number
  }
  
  export interface N40055 {
    h: number
    w: number
  }
  
  export interface Full55 {
    h: number
    w: number
  }
  
  export interface N49 {
    sizes: Sizes56
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes56 {
    "100": N10056
    "400": N40056
    full: Full56
  }
  
  export interface N10056 {
    h: number
    w: number
  }
  
  export interface N40056 {
    h: number
    w: number
  }
  
  export interface Full56 {
    h: number
    w: number
  }
  
  export interface N50 {
    sizes: Sizes57
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes57 {
    "100": N10057
    "400": N40057
    full: Full57
  }
  
  export interface N10057 {
    h: number
    w: number
  }
  
  export interface N40057 {
    h: number
    w: number
  }
  
  export interface Full57 {
    h: number
    w: number
  }
  
  export interface N51 {
    sizes: Sizes58
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes58 {
    "100": N10058
    "400": N40058
    full: Full58
  }
  
  export interface N10058 {
    h: number
    w: number
  }
  
  export interface N40058 {
    h: number
    w: number
  }
  
  export interface Full58 {
    h: number
    w: number
  }
  
  export interface N52 {
    sizes: Sizes59
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes59 {
    "100": N10059
    "400": N40059
    full: Full59
  }
  
  export interface N10059 {
    h: number
    w: number
  }
  
  export interface N40059 {
    h: number
    w: number
  }
  
  export interface Full59 {
    h: number
    w: number
  }
  
  export interface N53 {
    sizes: Sizes60
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes60 {
    "100": N10060
    "400": N40060
    full: Full60
  }
  
  export interface N10060 {
    h: number
    w: number
  }
  
  export interface N40060 {
    h: number
    w: number
  }
  
  export interface Full60 {
    h: number
    w: number
  }
  
  export interface N54 {
    sizes: Sizes61
    uploaded_t: number
    uploader: string
  }
  
  export interface Sizes61 {
    "100": N10061
    "400": N40061
    full: Full61
  }
  
  export interface N10061 {
    h: number
    w: number
  }
  
  export interface N40061 {
    h: number
    w: number
  }
  
  export interface Full61 {
    h: number
    w: number
  }
  
  export interface FrontEs {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes62
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes62 {
    "100": N10062
    "200": N2008
    "400": N40062
    full: Full62
  }
  
  export interface N10062 {
    h: number
    w: number
  }
  
  export interface N2008 {
    h: number
    w: number
  }
  
  export interface N40062 {
    h: number
    w: number
  }
  
  export interface Full62 {
    h: number
    w: number
  }
  
  export interface IngredientsDa {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes63
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes63 {
    "100": N10063
    "200": N2009
    "400": N40063
    full: Full63
  }
  
  export interface N10063 {
    h: number
    w: number
  }
  
  export interface N2009 {
    h: number
    w: number
  }
  
  export interface N40063 {
    h: number
    w: number
  }
  
  export interface Full63 {
    h: number
    w: number
  }
  
  export interface IngredientsDe {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes64
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes64 {
    "100": N10064
    "200": N20010
    "400": N40064
    full: Full64
  }
  
  export interface N10064 {
    h: number
    w: number
  }
  
  export interface N20010 {
    h: number
    w: number
  }
  
  export interface N40064 {
    h: number
    w: number
  }
  
  export interface Full64 {
    h: number
    w: number
  }
  
  export interface IngredientsEl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes65
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes65 {
    "100": N10065
    "200": N20011
    "400": N40065
    full: Full65
  }
  
  export interface N10065 {
    h: number
    w: number
  }
  
  export interface N20011 {
    h: number
    w: number
  }
  
  export interface N40065 {
    h: number
    w: number
  }
  
  export interface Full65 {
    h: number
    w: number
  }
  
  export interface IngredientsEn {
    angle: number
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes66
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes66 {
    "100": N10066
    "200": N20012
    "400": N40066
    full: Full66
  }
  
  export interface N10066 {
    h: number
    w: number
  }
  
  export interface N20012 {
    h: number
    w: number
  }
  
  export interface N40066 {
    h: number
    w: number
  }
  
  export interface Full66 {
    h: number
    w: number
  }
  
  export interface IngredientsEs {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes67
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes67 {
    "100": N10067
    "200": N20013
    "400": N40067
    full: Full67
  }
  
  export interface N10067 {
    h: number
    w: number
  }
  
  export interface N20013 {
    h: number
    w: number
  }
  
  export interface N40067 {
    h: number
    w: number
  }
  
  export interface Full67 {
    h: number
    w: number
  }
  
  export interface IngredientsFi {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes68
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes68 {
    "100": N10068
    "200": N20014
    "400": N40068
    full: Full68
  }
  
  export interface N10068 {
    h: number
    w: number
  }
  
  export interface N20014 {
    h: number
    w: number
  }
  
  export interface N40068 {
    h: number
    w: number
  }
  
  export interface Full68 {
    h: number
    w: number
  }
  
  export interface IngredientsNl {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes69
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes69 {
    "100": N10069
    "200": N20015
    "400": N40069
    full: Full69
  }
  
  export interface N10069 {
    h: number
    w: number
  }
  
  export interface N20015 {
    h: number
    w: number
  }
  
  export interface N40069 {
    h: number
    w: number
  }
  
  export interface Full69 {
    h: number
    w: number
  }
  
  export interface IngredientsNo {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes70
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes70 {
    "100": N10070
    "200": N20016
    "400": N40070
    full: Full70
  }
  
  export interface N10070 {
    h: number
    w: number
  }
  
  export interface N20016 {
    h: number
    w: number
  }
  
  export interface N40070 {
    h: number
    w: number
  }
  
  export interface Full70 {
    h: number
    w: number
  }
  
  export interface IngredientsPt {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes71
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes71 {
    "100": N10071
    "200": N20017
    "400": N40071
    full: Full71
  }
  
  export interface N10071 {
    h: number
    w: number
  }
  
  export interface N20017 {
    h: number
    w: number
  }
  
  export interface N40071 {
    h: number
    w: number
  }
  
  export interface Full71 {
    h: number
    w: number
  }
  
  export interface IngredientsSv {
    angle: number
    geometry: string
    imgid: string
    normalize: any
    rev: string
    sizes: Sizes72
    white_magic: any
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes72 {
    "100": N10072
    "200": N20018
    "400": N40072
    full: Full72
  }
  
  export interface N10072 {
    h: number
    w: number
  }
  
  export interface N20018 {
    h: number
    w: number
  }
  
  export interface N40072 {
    h: number
    w: number
  }
  
  export interface Full72 {
    h: number
    w: number
  }
  
  export interface PackagingDe {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes73
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
  }
  
  export interface Sizes73 {
    "100": N10073
    "200": N20019
    "400": N40073
    full: Full73
  }
  
  export interface N10073 {
    h: number
    w: number
  }
  
  export interface N20019 {
    h: number
    w: number
  }
  
  export interface N40073 {
    h: number
    w: number
}
  
export interface Full73 {
    h: number
    w: number
}
  
export interface PackagingFr {
    angle: string
    coordinates_image_size: string
    geometry: string
    imgid: string
    normalize: string
    rev: string
    sizes: Sizes74
    white_magic: string
    x1: string
    x2: string
    y1: string
    y2: string
}
  
export interface Sizes74 {
    "100": N10074
    "200": N20020
    "400": N40074
    full: Full74
}
  
export interface N10074 {
    h: number
    w: number
}
  
export interface N20020 {
    h: number
    w: number
}
  
export interface N40074 {
    h: number
    w: number
}
  
export interface Full74 {
    h: number
    w: number
}
  
export interface Ingredient {
    has_sub_ingredients?: string
    id: string
    percent_estimate: any
    percent_max: any
    percent_min: any
    rank?: number
    text: string
    vegan?: string
    vegetarian?: string
    percent?: number
    from_palm_oil?: string
}
  
export interface IngredientsAnalysis {
    "en:non-vegan": string[]
    "en:non-vegetarian"?: string[]
    "en:palm-oil-content-unknown": string[]
    "en:vegan-status-unknown": string[]
    "en:vegetarian-status-unknown": string[]
}
  
export interface Languages {
    "en:english": number
    "en:french": number
    "en:bokmal"?: number
    "en:danish"?: number
    "en:dutch"?: number
    "en:finnish"?: number
    "en:german"?: number
    "en:greek"?: number
    "en:norwegian"?: number
    "en:portuguese"?: number
    "en:spanish"?: number
    "en:swedish"?: number
}
  
export interface LanguagesCodes {
    en: number
    fr: number
    da?: number
    de?: number
    el?: number
    es?: number
    fi?: number
    nb?: number
    nl?: number
    no?: number
    pt?: number
    sv?: number
}
  
export interface NovaGroupsMarkers {
    "3": string[][]
    "4"?: string[][]
}
  
export interface NutrientLevels {
    fat: string
    salt: string
    "saturated-fat": string
    sugars: string
}
  
export interface Nutriments {
    carbohydrates: number
    carbohydrates_100g: number
    carbohydrates_serving?: number
    carbohydrates_unit: string
    carbohydrates_value: number
    "carbon-footprint-from-known-ingredients_100g": string
    "carbon-footprint-from-known-ingredients_product": number
    "carbon-footprint-from-known-ingredients_serving": any
    energy: number
    "energy-kcal": number
    "energy-kcal_100g": number
    "energy-kcal_serving"?: number
    "energy-kcal_unit": string
    "energy-kcal_value": number
    "energy-kcal_value_computed": string
    "energy-kj": number
    "energy-kj_100g": number
    "energy-kj_serving"?: number
    "energy-kj_unit": string
    "energy-kj_value": number
    "energy-kj_value_computed": string
    energy_100g: number
    energy_serving?: number
    energy_unit: string
    energy_value: number
    fat: string
    fat_100g: string
    fat_serving?: string
    fat_unit: string
    fat_value: string
    fiber: any
    fiber_100g: any
    fiber_serving?: string
    fiber_unit: string
    fiber_value: any
    "fruits-vegetables-nuts-estimate-from-ingredients_100g": number
    "fruits-vegetables-nuts-estimate-from-ingredients_serving": number
    "nova-group": number
    "nova-group_100g": number
    "nova-group_serving": number
    "nutrition-score-fr": number
    "nutrition-score-fr_100g": number
    proteins: any
    proteins_100g: any
    proteins_serving?: number
    proteins_unit: string
    proteins_value: any
    salt: string
    salt_100g: string
    salt_serving?: number
    salt_unit: string
    salt_value: string
    "saturated-fat": string
    "saturated-fat_100g": string
    "saturated-fat_serving"?: string
    "saturated-fat_unit": string
    "saturated-fat_value": string
    sodium: string
    sodium_100g: string
    sodium_serving?: string
    sodium_unit: string
    sodium_value: string
    sugars: string
    sugars_100g: string
    sugars_serving?: string
    sugars_unit: string
    sugars_value: string
}
  
export interface NutriscoreData {
    energy: number
    energy_points: number
    energy_value: number
    fiber: any
    fiber_points: number
    fiber_value: any
    fruits_vegetables_nuts_colza_walnut_olive_oils: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
    fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
    grade: string
    is_beverage: number
    is_cheese: number
    is_fat: number
    is_water: number
    negative_points: number
    positive_points: number
    proteins: any
    proteins_points: number
    proteins_value: any
    saturated_fat: string
    saturated_fat_points: number
    saturated_fat_ratio: string
    saturated_fat_ratio_points: number
    saturated_fat_ratio_value: any
    saturated_fat_value: string
    score: number
    sodium: number
    sodium_points: number
    sodium_value: number
    sugars: string
    sugars_points: number
    sugars_value: string
}
  
export interface Packaging3 {
    shape: string
    material?: string
}
  
export interface Scores2 {}
  
export interface SelectedImages {
    front: Front2
    ingredients: Ingredients2
    nutrition: Nutrition2
    packaging?: Packaging4
}
  
export interface Front2 {
    display: Display
    small: Small
    thumb: Thumb
}
  
export interface Display {
    en: string
    fr: string
    es?: string
}
  
export interface Small {
    en: string
    fr: string
    es?: string
}
  
export interface Thumb {
    en: string
    fr: string
    es?: string
}
  
  export interface Ingredients2 {
    display: Display2
    small: Small2
    thumb: Thumb2
  }
  
  export interface Display2 {
    fr: string
    da?: string
    de?: string
    el?: string
    en?: string
    es?: string
    fi?: string
    nl?: string
    no?: string
    pt?: string
    sv?: string
  }
  
  export interface Small2 {
    fr: string
    da?: string
    de?: string
    el?: string
    en?: string
    es?: string
    fi?: string
    nl?: string
    no?: string
    pt?: string
    sv?: string
  }
  
  export interface Thumb2 {
    fr: string
    da?: string
    de?: string
    el?: string
    en?: string
    es?: string
    fi?: string
    nl?: string
    no?: string
    pt?: string
    sv?: string
  }
  
  export interface Nutrition2 {
    display: Display3
    small: Small3
    thumb: Thumb3
  }
  
  export interface Display3 {
    fr: string
  }
  
  export interface Small3 {
    fr: string
  }
  
  export interface Thumb3 {
    fr: string
  }
  
  export interface Packaging4 {
    display: Display4
    small: Small4
    thumb: Thumb4
  }
  
  export interface Display4 {
    de: string
    fr: string
  }
  
  export interface Small4 {
    de: string
    fr: string
  }
  
  export interface Thumb4 {
    de: string
    fr: string
  }
  
  export interface Source {
    fields: string[]
    id: string
    images: string[]
    import_t: number
    manufacturer?: number
    name?: string
    url: string
  }
  