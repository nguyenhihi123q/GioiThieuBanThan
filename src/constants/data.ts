/* ==========================================================================
 * SITE DATA — Extracted from gioithieubanthan.md
 * This is the SINGLE SOURCE OF TRUTH for all personal data.
 * Never fabricate information. Only data from the markdown is used.
 * ========================================================================== */

import type {
  PersonalInfo,
  Education,
  SkillCategory,
  Achievement,
  Research,
  Activity,
  StatItem,
  BlogPost,
} from '@/types'

import partyMemberImg from '@/assets/homepage/party-member.jpg'
import mosChampionImg from '@/assets/homepage/mos-champion.jpg'
import digitalTeachingImg from '@/assets/homepage/digital-teaching.jpg'
import saoThangGiengImg from '@/assets/homepage/sao-thang-gieng.jpg'
import researchAiBotImg from '@/assets/homepage/research-ai-bot.jpg'
import researchMoodleImg from '@/assets/homepage/research-moodle.jpg'
import researchBrightLearningImg from '@/assets/homepage/research-bright-learning.jpg'

/* ------------------------------------------------------------------ */
/* PERSONAL INFORMATION                                                */
/* ------------------------------------------------------------------ */
export const personalInfo: PersonalInfo = {
  name: 'Trần Võ Hoàng Nguyên',
  title: 'Giáo viên Tin học',
  gender: 'Nam',
  dateOfBirth: '01-03-2004',
  partyStatus: 'Đảng viên (Kết nạp ngày 22/09/2025)',
  phone: '0934721591',
  email: 'haringnguyen5@gmail.com',
  address: 'Kim Long, Thành Phố Huế',
}

/* ------------------------------------------------------------------ */
/* EDUCATION                                                           */
/* ------------------------------------------------------------------ */
export const education: Education[] = [
  {
    id: 'hue-university',
    institution: 'Đại học Sư phạm, Đại học Huế',
    major: 'Sư phạm Tin học',
    period: '2022 - 2026',
    achievements: [
      'Thủ khoa đầu ra năm 2026',
      'Đạt học bổng Khuyến khích học tập (KKHT) 8/8 kì trong suốt 4 năm đại học',
      'Đạt Học bổng Vallet năm 2025',
      'Phó đoàn Thực tập sư phạm 2 đạt kết quả tối đa 10/10 điểm',
      'Thủ lĩnh các đội dự thi các cuộc thi cấp trường và cấp Đại học Huế đều đạt giải',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* SKILLS                                                              */
/* ------------------------------------------------------------------ */
export const skills: SkillCategory[] = [
  {
    id: 'digital-transformation',
    category: 'Chuyên môn & Chuyển đổi số',
    items: ['Tham gia tập huấn chuyển đổi số trên địa bàn thành phố Huế'],
    icon: 'Monitor',
  },
  {
    id: 'foreign-language',
    category: 'Ngoại ngữ',
    items: ['Tiếng Anh trình độ B1'],
    icon: 'Globe',
  },
  {
    id: 'office',
    category: 'Tin học văn phòng',
    items: [
      'Thành thạo Microsoft Office (Word, Excel, PowerPoint)',
    ],
    icon: 'FileSpreadsheet',
  },
  {
    id: 'programming',
    category: 'Lập trình',
    items: [
      'Python',
      'C++',
      'Java',
      'HTML',
      'CSS',
    ],
    icon: 'Code',
  },
  {
    id: 'soft-skills',
    category: 'Kỹ năng mềm',
    items: [
      'Tổ chức sự kiện và hoạt động ngoại khóa',
      'Dẫn chương trình (MC) các sự kiện học sinh, sinh viên',
    ],
    icon: 'Users',
  },
]

/* ------------------------------------------------------------------ */
/* ACHIEVEMENTS                                                        */
/* ------------------------------------------------------------------ */
export const achievements: Achievement[] = [
  {
    id: 'party-member',
    title: 'Đảng viên Đảng Cộng sản Việt Nam',
    description:
      'Vinh dự đứng vào hàng ngũ của Đảng Cộng sản Việt Nam ngày 22/09/2025.',
    year: '2025',
    category: 'leadership',
    image: partyMemberImg,
  },
  {
    id: 'mos-champion',
    title: 'Giải nhất MOS Tỉnh Thừa Thiên Huế',
    description:
      'Giải nhất cuộc thi vô địch tin học văn phòng MOS Tỉnh Thừa Thiên Huế năm 2024.',
    year: '2024',
    category: 'competition',
    image: mosChampionImg,
  },
  {
    id: 'digital-teaching',
    title: 'Giải nhất Ứng dụng số trong dạy học',
    description:
      'Giải nhất cuộc thi Ứng dụng số trong dạy học và giáo dục do Trường Đại học Sư phạm Huế tổ chức.',
    year: '2024',
    category: 'competition',
    image: digitalTeachingImg,
  },
  {
    id: 'sao-thang-gieng-hue',
    title: 'Sao Tháng Giêng cấp Đại học Huế',
    description:
      'Đạt danh hiệu "Sao Tháng Giêng" 2 năm liên tiếp cấp Đại học Huế (năm 2024).',
    year: '2024',
    category: 'award',
    image: saoThangGiengImg,
  },
  {
    id: 'sao-thang-gieng-school',
    title: 'Sao Tháng Giêng cấp Trường ĐHSP Huế',
    description:
      'Đạt danh hiệu "Sao Tháng Giêng" cấp Trường Đại học Sư phạm Huế năm 2024.',
    year: '2024',
    category: 'award',
  },
  {
    id: 'sv5t-hue',
    title: 'Sinh viên 5 tốt cấp Đại học Huế',
    description:
      'Đạt danh hiệu "Sinh viên 5 tốt" cấp Đại học Huế liên tiếp 2 năm học từ 2024 - 2026.',
    year: '2024 - 2026',
    category: 'award',
  },
  {
    id: 'sv5t-school',
    title: 'Sinh viên 5 tốt cấp Trường ĐHSP Huế',
    description:
      'Đạt danh hiệu "Sinh viên 5 tốt" cấp Trường Đại học Sư phạm Huế liên tiếp 2 năm học từ 2024 - 2026.',
    year: '2024 - 2026',
    category: 'award',
  },
  {
    id: 'outstanding-union-member',
    title: 'Đoàn viên ưu tú 4 năm liên tục',
    description:
      'Được Ban Thường vụ Đoàn Trường Đại học Sư phạm, Đại học Huế công nhận là "Đoàn viên ưu tú" liên tục trong suốt 4 năm đại học.',
    year: '2022 - 2026',
    category: 'leadership',
  },
  {
    id: 'union-excellence',
    title: 'Thành tích xuất sắc công tác Đoàn',
    description:
      'Được BCH Đoàn TNCS Trường Đại học Sư phạm, Đại học Huế khen tặng: "Đã có thành tích xuất sắc trong công tác Đoàn và phong trào thanh niên năm học 2024 - 2025".',
    year: '2024 - 2025',
    category: 'leadership',
  },
  {
    id: 'student-union-excellence',
    title: 'Thành tích xuất sắc công tác Hội',
    description:
      'Được Hội Sinh viên Đại học Huế và Hội Sinh viên Trường Đại học Sư phạm khen thưởng vì có nhiều thành tích xuất sắc trong công tác Hội và phong trào sinh viên.',
    year: '2024 - 2025',
    category: 'leadership',
  },
  {
    id: 'startup-innovation',
    title: 'Giải Khuyến khích Ý tưởng khởi nghiệp',
    description:
      'Đạt Giải Khuyến khích cuộc thi Ý tưởng khởi nghiệp và đổi mới sáng tạo Đại học Huế lần thứ 8.',
    year: '2024',
    category: 'startup',
  },
  {
    id: 'digital-community',
    title: 'Tập huấn chuyển đổi số cộng đồng',
    description:
      'Tham gia tập huấn chuyển đổi số cho nhiều đơn vị trên địa bàn thành phố Huế (hợp tác cùng Viện Chuyển đổi số và Học liệu).',
    year: '2024 - 2025',
    category: 'community',
  },
]

/* ------------------------------------------------------------------ */
/* RESEARCH                                                            */
/* ------------------------------------------------------------------ */
export const research: Research[] = [
  {
    id: 'ai-bot-grade-11',
    title:
      'Ứng Dụng AI Bot, Xây Dựng Ứng Dụng Số Hỗ Trợ Học Tập Tin Học Lớp 11',
    summary:
      'Nghiên cứu ứng dụng trí tuệ nhân tạo (AI Bot) để xây dựng ứng dụng số hỗ trợ học tập môn Tin học lớp 11, nhằm cá nhân hóa trải nghiệm học tập cho học sinh.',
    objectives: [
      'Xây dựng AI Bot hỗ trợ học tập Tin học lớp 11',
      'Cá nhân hóa trải nghiệm học tập',
      'Đánh giá hiệu quả ứng dụng trong giảng dạy',
    ],
    technology: ['Artificial Intelligence', 'Chatbot', 'Education Technology'],
    contribution: 'Tác giả chính',
    results: 'Đạt kết quả tốt trong hỗ trợ học sinh học tập',
    award: 'Giải Nhì',
    coverImage: researchAiBotImg,
  },
  {
    id: 'moodle-personalization',
    title:
      'Cơ sở lý thuyết và giải pháp toán học - Công nghệ cho hệ thống cá nhân hóa học tập trên nền tảng MOODLE',
    summary:
      'Nghiên cứu cơ sở lý thuyết và đề xuất các giải pháp toán học - công nghệ để xây dựng hệ thống cá nhân hóa học tập trên nền tảng MOODLE, phục vụ giáo dục trực tuyến.',
    objectives: [
      'Xây dựng cơ sở lý thuyết cho cá nhân hóa học tập',
      'Đề xuất giải pháp toán học - công nghệ',
      'Triển khai trên nền tảng MOODLE',
    ],
    technology: ['MOODLE', 'Learning Analytics', 'Mathematics', 'Algorithm'],
    contribution: 'Đồng tác giả',
    results: 'Đề xuất được giải pháp hiệu quả cho cá nhân hóa học tập',
    award: 'Giải Khuyến khích - Giải thưởng khoa học sinh viên',
    coverImage: researchMoodleImg,
  },
  {
    id: 'bright-learning-buddy',
    title: 'Nền tảng hỗ trợ học tập cá nhân hóa - Bright Learning Buddy',
    summary:
      'Xây dựng nền tảng hỗ trợ học tập cá nhân hóa "Bright Learning Buddy" nhằm tối ưu hóa trải nghiệm học tập cho từng học sinh dựa trên phân tích dữ liệu và trí tuệ nhân tạo.',
    objectives: [
      'Xây dựng nền tảng học tập cá nhân hóa',
      'Áp dụng AI trong phân tích học tập',
      'Tối ưu hóa trải nghiệm người dùng',
    ],
    technology: [
      'Artificial Intelligence',
      'Machine Learning',
      'Web Platform',
      'Data Analytics',
    ],
    contribution: 'Tác giả chính',
    results: 'Nền tảng hoạt động hiệu quả, hỗ trợ cá nhân hóa học tập',
    award: 'Giải Khuyến khích - Giải thưởng khoa học sinh viên',
    coverImage: researchBrightLearningImg,
  },
]

/* ------------------------------------------------------------------ */
/* ACTIVITIES                                                          */
/* ------------------------------------------------------------------ */
export const activities: Activity[] = [
  {
    id: 'deputy-secretary',
    organization: 'Liên chi đoàn Khoa Tin học - Đại học Sư phạm Huế',
    role: 'Phó Bí thư',
    description:
      'Phó Bí thư Liên chi đoàn (LCĐ) Khoa Tin học nhiệm kỳ 2024 - 2025.',
    achievements: [
      'Lãnh đạo các hoạt động Đoàn - Hội của Khoa',
      'Tổ chức thành công các sự kiện sinh viên',
      'Được công nhận Đoàn viên ưu tú',
    ],
    period: '2024 - 2025',
  },
  {
    id: 'executive-member',
    organization: 'Liên chi đoàn Khoa Tin học - Đại học Sư phạm Huế',
    role: 'Ủy viên Ban chấp hành',
    description:
      'Ủy viên Ban chấp hành (BCH) Liên chi đoàn (LCĐ) Khoa Tin học nhiệm kỳ 2024 - 2027.',
    achievements: [
      'Tham gia điều hành các hoạt động của Liên chi đoàn',
      'Đóng góp vào phong trào thanh niên của Khoa',
    ],
    period: '2024 - 2027',
  },
  {
    id: 'digital-transformation-training',
    organization: 'Viện Chuyển đổi số và Học liệu',
    role: 'Giảng viên tập huấn',
    description:
      'Tham gia tập huấn chuyển đổi số cho nhiều đơn vị trên địa bàn thành phố Huế.',
    achievements: [
      'Hỗ trợ chuyển đổi số cho các đơn vị tại Huế',
      'Chia sẻ kiến thức công nghệ với cộng đồng',
    ],
    period: '2024 - 2025',
  },
]

/* ------------------------------------------------------------------ */
/* STATISTICS                                                          */
/* ------------------------------------------------------------------ */
export const statistics: StatItem[] = [
  {
    label: 'Thành tích nổi bật',
    value: 12,
    suffix: '+',
    icon: 'Trophy',
  },
  {
    label: 'Công trình nghiên cứu',
    value: 3,
    icon: 'FlaskConical',
  },
  {
    label: 'Kỳ học bổng',
    value: 8,
    suffix: '/8',
    icon: 'GraduationCap',
  },
  {
    label: 'Năm hoạt động Đoàn',
    value: 4,
    suffix: '+',
    icon: 'Users',
  },
]

/* ------------------------------------------------------------------ */
/* NAVIGATION ITEMS                                                    */
/* ------------------------------------------------------------------ */
export const navigationItems: { key: string; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'education', path: '/education' },
  { key: 'achievements', path: '/achievements' },
  { key: 'research', path: '/research' },
  { key: 'projects', path: '/projects' },
  { key: 'activities', path: '/activities' },
  { key: 'library', path: '/library' },
  { key: 'blog', path: '/blog' },
  { key: 'gallery', path: '/gallery' },
  { key: 'contact', path: '/contact' },
]

/* ------------------------------------------------------------------ */
/* SOCIAL LINKS                                                        */
/* ------------------------------------------------------------------ */
export const socialLinks = [
  { platform: 'Email', url: 'mailto:haringnguyen5@gmail.com', icon: 'Mail' },
  { platform: 'Phone', url: 'tel:0934721591', icon: 'Phone' },
  { platform: 'Facebook', url: '#', icon: 'Facebook' },
  { platform: 'GitHub', url: '#', icon: 'Github' },
  { platform: 'LinkedIn', url: '#', icon: 'Linkedin' },
  { platform: 'YouTube', url: '#', icon: 'Youtube' },
]

/* ------------------------------------------------------------------ */
/* BLOG POSTS                                                          */
/* ------------------------------------------------------------------ */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-in-education',
    title: 'Ứng dụng AI trong Giáo dục: Xu hướng và Thách thức',
    excerpt: 'Khám phá cách trí tuệ nhân tạo đang thay đổi lĩnh vực giáo dục và những cơ hội cho giáo viên Việt Nam.',
    publishDate: '2026-05-15',
    readingTime: 8,
    category: 'AI',
    tags: ['AI', 'Education', 'Innovation'],
    content: `
# Ứng dụng AI trong Giáo dục: Xu hướng và Thách thức

Trí tuệ nhân tạo (AI) đang tạo ra một cuộc cách mạng toàn diện trong nhiều lĩnh vực, và giáo dục không phải là ngoại lệ. Là một giáo viên Tin học và là một AI Trainer, tôi nhận thấy AI không chỉ thay đổi cách chúng ta tiếp cận tri thức mà còn định hình lại cả vai trò của người dạy và người học.

## 1. Xu hướng ứng dụng AI trong dạy học hiện đại

Hiện nay, các mô hình ngôn ngữ lớn (LLM) và các AI Bot đang được ứng dụng mạnh mẽ với nhiều mục đích khác nhau:

*   **Cá nhân hóa lộ trình học tập:** Mỗi học sinh có một tốc độ tiếp thu và phong cách học tập khác nhau. AI có thể phân tích hành vi và kết quả làm bài của học sinh để đưa ra các gợi ý bài học phù hợp, giúp học sinh yếu lấp đầy lỗ hổng kiến thức và học sinh giỏi phát triển nhanh hơn.
*   **Trợ lý ảo hỗ trợ học tập (AI Buddy):** Các ứng dụng như chatbot hỗ trợ học tập (ví dụ: đề tài nghiên cứu "Bright Learning Buddy" hay ứng dụng AI Bot hỗ trợ Tin học 11) cho phép học sinh tương tác, hỏi đáp 24/7 về các bài tập lập trình, lý thuyết máy tính mà không cần đợi giáo viên trả lời.
*   **Tự động hóa công việc hành chính của giáo viên:** AI hỗ trợ giáo viên soạn thảo giáo án, xây dựng bộ câu hỏi trắc nghiệm, chấm bài tự động hoặc nhận xét học sinh nhanh chóng hơn.

## 2. Những thách thức khi đưa AI vào lớp học

Mặc dù có tiềm năng to lớn, việc ứng dụng AI vào nhà trường vẫn đối mặt với không ít rào cản:

1.  **Tính chính xác và \"ảo tưởng\" của AI (Hallucination):** Các mô hình AI đôi khi đưa ra các thông tin sai lệch nhưng với giọng điệu rất thuyết phục. Điều này đòi hỏi giáo viên và học sinh phải có tư duy phản biện cao để kiểm chứng thông tin.
2.  **Sự phụ thuộc quá mức:** Học sinh có thể lạm dụng AI để làm hộ bài tập hoặc viết code thay vì tự suy nghĩ, dẫn đến việc suy giảm tư duy logic và kỹ năng giải quyết vấn đề.
3.  **Khoảng cách số và công nghệ:** Không phải trường học hay học sinh nào cũng có cơ hội tiếp cận đồng đều với các công nghệ AI trả phí hoặc đường truyền internet chất lượng cao.

## 3. Lời kết

AI sinh ra không phải để thay thế người thầy, mà là để đồng hành và giải phóng người thầy khỏi những công việc lặp đi lặp lại, từ đó tập trung vào việc khơi dậy cảm hứng và phát triển kỹ năng mềm cho học sinh. Là những giáo viên trong kỷ nguyên số, chúng ta cần chủ động đón nhận, trang bị kỹ năng sử dụng AI một cách thông minh và có trách nhiệm.
    `
  },
  {
    id: '2',
    slug: 'digital-transformation-education',
    title: 'Chuyển đổi số trong Giáo dục: Hành trình thực tế',
    excerpt: 'Chia sẻ kinh nghiệm thực tế từ việc tham gia tập huấn chuyển đổi số tại Huế.',
    publishDate: '2026-04-20',
    readingTime: 6,
    category: 'Digital Transformation',
    tags: ['Digital', 'Education', 'Huế'],
    content: `
# Chuyển đổi số trong Giáo dục: Hành trình thực tế tại TP. Huế

Chuyển đổi số trong giáo dục không đơn thuần là việc trang bị máy tính cho phòng máy hay chuyển từ viết bảng sang trình chiếu PowerPoint. Đó là một sự thay đổi sâu sắc về tư duy giảng dạy, quản lý và vận hành trường học.

Trong năm qua, tôi đã có cơ hội đồng hành cùng Viện Chuyển đổi số và Học liệu để triển khai các buổi tập huấn chuyển đổi số cho nhiều đơn vị giáo dục, cơ quan trên địa bàn thành phố Huế. Dưới đây là những bài học thực tế tôi rút ra được từ hành trình này.

## 1. Thay đổi nhận thức là yếu tố tiên quyết

Khi bắt đầu tập huấn, rào cản lớn nhất không phải là kỹ năng công nghệ mà là sự ngần ngại thay đổi thói quen giảng dạy truyền thống. Nhiều giáo viên lâu năm lo lắng rằng việc sử dụng các phần mềm quản lý lớp học hay bài giảng tương tác sẽ làm mất thời gian hoặc quá phức tạp.

Tuy nhiên, khi trực tiếp trải nghiệm sự tiện ích của việc lưu trữ đám mây, chấm trắc nghiệm tự động trên điện thoại hay tổ chức trò chơi tương tác như Kahoot, Quizizz, nhận thức của người dạy đã thay đổi hoàn toàn.

## 2. Tính thực tiễn của công cụ số

Thay vì giảng dạy những lý thuyết vĩ mô, chúng tôi tập trung vào việc hướng dẫn các kỹ năng tin học văn phòng thực chiến và công cụ hữu ích:
*   **Microsoft OneDrive & Google Drive:** Quản lý dữ liệu học sinh tập trung, chia sẻ giáo án không giới hạn.
*   **Canva for Education:** Thiết kế bài giảng trực quan, sinh động trong vài phút.
*   **Ứng dụng số hỗ trợ kiểm tra đánh giá:** Tạo đề và chấm bài tự động nhanh chóng và minh bạch.

## 3. Tương lai của chuyển đổi số giáo dục tại Huế

Huế là một vùng đất hiếu học và có truyền thống văn hóa lâu đời. Việc kết hợp chuyển đổi số một cách khéo léo sẽ giúp nâng cao chất lượng dạy và học tại đây, đưa học sinh tiếp cận gần hơn với dòng chảy công nghệ toàn cầu mà vẫn giữ gìn những giá trị cốt lõi của giáo dục vùng đất Cố đô.
    `
  },
  {
    id: '3',
    slug: 'python-beginners-guide',
    title: 'Hướng dẫn Python cho Giáo viên Tin học',
    excerpt: 'Tài liệu cơ bản để bắt đầu giảng dạy Python trong chương trình Tin học phổ thông.',
    publishDate: '2026-03-10',
    readingTime: 12,
    category: 'Programming',
    tags: ['Python', 'Programming', 'Teaching'],
    content: `
# Hướng dẫn Python dành cho Giáo viên Tin học phổ thông

Với chương trình giáo dục phổ thông mới, Python đã trở thành ngôn ngữ lập trình chính được giảng dạy trong nhà trường thay thế cho Pascal hay C++. Đối với nhiều giáo viên, việc chuyển giao ngôn ngữ này ban đầu có thể gặp đôi chút bỡ ngỡ. Bài viết này tổng hợp các kiến thức cốt lõi và phương pháp tiếp cận giúp thầy cô giảng dạy Python hiệu quả hơn.

## 1. Tại sao lại chọn Python thay vì Pascal?

*   **Cú pháp tối giản, tường minh:** Học sinh không cần tốn quá nhiều thời gian để nhớ cấu trúc dấu chấm phẩy \`;\` hay từ khóa \`begin\`/\`end\` rườm rà.
*   **Hỗ trợ thư viện phong phú:** Học sinh dễ dàng thực hiện các dự án nhỏ như vẽ hình bằng thư viện \`turtle\`, lập trình giao diện hoặc xử lý dữ liệu đơn giản.
*   **Tính thực tế cao:** Python là ngôn ngữ cực kỳ phổ biến trong công nghiệp phần mềm, AI và Khoa học dữ liệu, giúp định hướng nghề nghiệp rất tốt cho học sinh từ sớm.

## 2. Kế hoạch giảng dạy khuyến nghị cho người bắt đầu

Khi thiết kế bài giảng, thầy cô nên chia lộ trình thành các khối kiến thức nhỏ:

1.  **Nhập xuất dữ liệu cơ bản:** Hàm \`print()\` và \`input()\`.
2.  **Cấu trúc rẽ nhánh:** Câu lệnh \`if-elif-else\` và các phép so sánh logic.
3.  **Vòng lặp:** \`for\` và \`while\`. Đặc biệt lưu ý việc thụt lề (indentation) trong Python — đây là điểm học sinh hay mắc lỗi nhất.
4.  **Cấu trúc dữ liệu danh sách (List):** Giới thiệu mảng một chiều thông qua kiểu dữ liệu cực mạnh này của Python.

## 3. Chia sẻ tài nguyên giảng dạy

Thầy cô có thể tải các bộ Slide bài giảng và mã nguồn Python mẫu trực tiếp tại mục **Thư viện** trên trang web này để làm tài liệu tham khảo cho các tiết học trên lớp.
    `
  }
]
