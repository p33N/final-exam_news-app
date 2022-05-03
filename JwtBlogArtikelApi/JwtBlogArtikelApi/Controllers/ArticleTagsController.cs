#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JwtBlogArtikelApi.Models;

namespace JwtBlogArtikelApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleTagsController : ControllerBase
    {
        private readonly BlogArtiklenDbContext _context;

        public ArticleTagsController(BlogArtiklenDbContext context)
        {
            _context = context;
        }

        // GET: api/ArticleTags
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArticleTag>>> GetArticleTags()
        {
            return await _context.ArticleTags.ToListAsync();
        }

        // GET: api/ArticleTags/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ArticleTag>> GetArticleTag(int id)
        {
            var articleTag = await _context.ArticleTags.FindAsync(id);

            if (articleTag == null)
            {
                return NotFound();
            }

            return articleTag;
        }

        // PUT: api/ArticleTags/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArticleTag(int id, ArticleTag articleTag)
        {
            if (id != articleTag.TagId)
            {
                return BadRequest();
            }

            _context.Entry(articleTag).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArticleTagExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ArticleTags
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ArticleTag>> PostArticleTag(ArticleTag articleTag)
        {
            _context.ArticleTags.Add(articleTag);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ArticleTagExists(articleTag.TagId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetArticleTag", new { id = articleTag.TagId }, articleTag);
        }

        // DELETE: api/ArticleTags/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticleTag(int id)
        {
            var articleTag = await _context.ArticleTags.FindAsync(id);
            if (articleTag == null)
            {
                return NotFound();
            }

            _context.ArticleTags.Remove(articleTag);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArticleTagExists(int id)
        {
            return _context.ArticleTags.Any(e => e.TagId == id);
        }
    }
}
